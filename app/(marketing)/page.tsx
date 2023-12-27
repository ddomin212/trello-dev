import React from "react";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../../public/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MarketingPage() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl pb-2">odot makes your</h1>
        <div className="text-white text-3xl md:text-6xl bg-gradient-to-tr from-slate-600 to to-black px-4 p-2 rounded-md w-fit">
          tasks flow!
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Helps you to get shit done. That&apos;s it.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href={"/"}>wolf retnE</Link>
      </Button>
    </div>
  );
}

export default MarketingPage;
