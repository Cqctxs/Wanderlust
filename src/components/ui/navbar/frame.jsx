"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";


export const Frame = () => {
  return (
    <>
      {/* Background and title */}
      <div className="  z-50 drop-shadow-wh absolute inset-0">
        <div className="z-0 absolute h-6 w-full bg-wh" />
        <div className="z-0 absolute top-6 left-0 bg-[url('/assets/top_left.svg')] bg-no-repeat bg-contain h-20 w-80" />
        <div className="z-0 absolute top-6 right-0 bg-[url('/assets/top_right.svg')] bg-no-repeat bg-contain h-20 w-80" />
        <Link href="/map">
          <button className="flex justify-between top-3 right-6 fixed w-60">
            <Globes start={0} />
            <Globes start={1} />
            <Globes start={2} />
          </button>
        </Link>
        <Link href="/">
        <div className="absolute top-5 left-4 bg-[url('/assets/logoWide.png')] bg-no-repeat bg-contain h-10 w-80" />
          </Link>
      </div>
    </>
  );
};