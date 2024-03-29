import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";
import { FormPopover } from "@/components/form/form-popover";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import Link from "next/link";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) {
    return null;
  }

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="w-6 h-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            className="group relative aspect-video bg-no-repeat bg-cover bg-center bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="relative font-semibold text-xs text-white">
              {board.title}
            </p>
          </Link>
        ))}
        <FormPopover side={"right"} sideOffset={10}>
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted bg-slate-100 rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <p className="text-sm">Create new board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description="Free workspaces can have up to 5 boards"
            >
              <HelpCircle className="w-[14px] h-[14px] abosolute bottom-2 right-2" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};
