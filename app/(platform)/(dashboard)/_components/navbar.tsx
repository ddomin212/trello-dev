import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="fixed z-50 top-0 w-full h-14 boder-b shadow-sm bg-white flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={10}>
          <Button
            variant={"primary"}
            size={"sm"}
            className="hidden md:block rounded-md h-auto py-1.5 px-2"
          >
            Create
          </Button>
        </FormPopover>
        <FormPopover side="bottom">
          <Button
            variant={"primary"}
            size={"sm"}
            className="rounded-md block md:hidden"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              rootBox: {
                height: "2.5rem",
                width: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
