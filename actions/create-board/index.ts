"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { revalidatePath } from "next/cache";
import { CreateBoardSchema } from "./schema";
import { createSafeAction } from "../create-safe-action";
import { db } from "@/lib/db";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUsername] =
    image.split("|");

  console.log({
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHTML,
    imageUsername,
  });

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageLinkHTML ||
    !imageUsername
  ) {
    return {
      error: "Invalid image",
    };
  }

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUsername,
      },
    });
  } catch (error) {
    return {
      error: "Something went wrong with the database, try again later",
    };
  }

  revalidatePath(`/organization/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoardSchema, handler);
