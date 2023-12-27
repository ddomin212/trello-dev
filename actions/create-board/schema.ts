import { z } from "zod";

export const CreateBoardSchema = z.object({
  title: z
    .string({
      required_error: "Required field",
      invalid_type_error: "Please enter a string",
    })
    .min(5, { message: "Please enter a 5+ character title" }),
  image: z.string({
    required_error: "Required field",
    invalid_type_error: "Please enter a string URL",
  }),
});
