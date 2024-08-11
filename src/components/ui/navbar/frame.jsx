"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";


export const Frame = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white drop-shadow-md">
      {/* Background and title */}
      <div>
        <div className="absolute inset-0 w-full h-8 bg-wh"></div>
        <div className="absolute top-8 left-0 bg-[url('/assets/top_left.svg')] bg-no-repeat bg-contain h-20 w-80"></div>
        <div className="absolute top-8 right-0 bg-[url('/assets/top_right.svg')] bg-no-repeat bg-contain h-20 w-80"></div>

        {/* Logo */}
        <Link href="/">
          <div className="absolute top-6 left-4 bg-[url('/assets/logoWide.png')] bg-no-repeat bg-contain h-20 w-60"></div>
        </Link>

        {/* Navigation Button */}
        <Link href="/map">
          <button className="absolute top-6 right-10 flex items-center space-x-2">
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