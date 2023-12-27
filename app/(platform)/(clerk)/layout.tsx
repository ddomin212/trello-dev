import React from "react";

type Props = {};

function ClerkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full pt-40 flex items-center justify-center">
      {children}
    </div>
  );
}

export default ClerkLayout;
