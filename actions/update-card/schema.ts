import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  title: z.optional(
    z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title is required",
      })
      .min(3, {
        message: "Title is too short",
      })
  ),
  id: z.string(),
});
