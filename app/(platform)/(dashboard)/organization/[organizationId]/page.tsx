import { db } from "@/lib/db";
import Form from "./form";
import { FormDelete } from "./form-delete";
import Board from "./board";
import { Info } from "./_components/info";
import { Separator } from "@/components/ui/separator";
import { BoardList } from "./_components/board-list";

async function OrganizationPage({}) {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
}

export default OrganizationPage;
