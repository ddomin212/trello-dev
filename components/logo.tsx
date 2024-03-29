import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({ src: "../public/font.woff2" });

function Logo({}: Props) {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          odot
        </p>
      </div>
    </Link>
  );
}

export default Logo;
