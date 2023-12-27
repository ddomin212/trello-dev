import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "./create-safe-action";

type Action<TIn, TOut> = (data: TIn) => Promise<ActionState<TIn, TOut>>;

interface UseActionOptions<TOut> {
  onSuccess?: (data: TOut) => void;
  onError?: (error: string) => void;
  onComplete?: () => void;
}

export const useAction = <TIn, TOut>(
  action: Action<TIn, TOut>,
  options: UseActionOptions<TOut> = {}
) => {
  const [fieldErrors, setFieldError] = useState<FieldErrors<TIn> | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOut | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(
    async (inp: TIn) => {
      setIsLoading(true);

      try {
        const result = await action(inp);

        if (!result) {
          return;
        }

        setFieldError(result.fieldErrors);

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }
    },
    [action, options]
  );

  return {
    fieldErrors,
    error,
    data,
    isLoading,
    execute,
  };
};
