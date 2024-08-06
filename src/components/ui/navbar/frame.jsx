"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";


export const Frame = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white drop-shadow-md">
      {/* Background and title */}
      <div className="relative h-20 bg-white">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 left-0 bg-[url('/assets/top_left.svg')] bg-no-repeat bg-contain h-20 w-80"></div>
        <div className="absolute top-0 right-0 bg-[url('/assets/top_right.svg')] bg-no-repeat bg-contain h-20 w-80"></div>

        {/* Logo */}
        <Link href="/">
          <div className="absolute top-0 left-4 bg-[url('/assets/logoWide.png')] bg-no-repeat bg-contain h-10 w-80"></div>
        </Link>

        {/* Navigation Button */}
        <Link href="/map">
          <button className="absolute top-3 right-6 flex items-center space-x-2">
            <Globes start={0} />
            <Globes start={1} />
            <Globes start={2} />
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};