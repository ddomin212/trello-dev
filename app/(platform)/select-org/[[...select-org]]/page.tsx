import { OrganizationList } from "@clerk/nextjs";
import React from "react";

type Props = {};

function OrganizationListComponent({}: Props) {
  return (
    <div className="flex pt-40 items-center justify-center">
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl={"/organization/:id"}
      />
    </div>
  );
}

export default OrganizationListComponent;
