"use client";

import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";

export const Info = () => {
  const { organization, isLoaded } = useOrganization();
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-x-4 justify-between mb-2">
        Loading
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[60px] h-[60px] relative">
        <Image
          fill
          src={organization?.imageUrl!}
          alt="org"
          className="rounded-sm object-cover"
        ></Image>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-xl">{organization?.name}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CreditCard className="w-5 h-5 mr-2" />
          Free
        </div>
      </div>
    </div>
  );
};
