import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TIn, TOut> = {
  fieldErrors?: FieldErrors<TIn>;
  error?: string | null;
  data?: TOut;
};

export const createSafeAction = <TIn, TOut>(
  schema: z.Schema<TIn>,
  handler: (validatorData: TIn) => Promise<ActionState<TIn, TOut>>
) => {
  return async (data: TIn): Promise<ActionState<TIn, TOut>> => {
    const validatedFields = schema.safeParse(data);

    if (!validatedFields.success) {
      return {
        fieldErrors: validatedFields.error.flatten()
          .fieldErrors as FieldErrors<TIn>,
      };
    }

    return handler(validatedFields.data);
  };
};
