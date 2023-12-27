import { UserButton } from "@clerk/nextjs";
import React from "react";

type Props = {};

async function ProtectedPage({}: Props) {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default ProtectedPage;
