import React from "react";
import OrgControl from "./_components/org-control";
import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

type Props = {};

export async function generateMetadata() {
  const { orgSlug } = auth();

  if (!orgSlug) {
    return { title: startCase(orgSlug || "organization") };
  }
}

function OrgIdLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrgIdLayout;
