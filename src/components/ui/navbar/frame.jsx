"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";


export const Frame = () => {
  return (
    <>
      {/* Background and title */}
      <div className="  z-50 drop-shadow-wh absolute inset-0">
        <div className="z-0 absolute h-full w-6 bg-wh" />
        <div className="z-0 absolute right-0 h-full w-6 bg-wh" />
        <div className="z-0 absolute h-6 w-full bg-wh" />
        <div className="z-0 absolute bottom-0 h-6 w-full bg-wh" />
        <div className="z-0 absolute top-6 left-6 bg-[url('/assets/top_left.svg')] bg-no-repeat bg-contain h-20 w-80" />
        <div className="z-0 absolute top-6 right-5 bg-[url('/assets/top_right.svg')] bg-no-repeat bg-contain h-20 w-80" />
        <div className="z-0 absolute bottom-2 right-1 bg-[url('/assets/bottom_right.png')] bg-no-repeat h-8 w-20" />
        <div className="z-0 absolute bottom-2 left-6 bg-[url('/assets/bottom_left.png')] bg-no-repeat h-8 w-20" />
        <Link href="/map">
          <button className="flex justify-between top-3 right-10 fixed w-60">
            <Globes start={0} />
            <Globes start={1} />
            <Globes start={2} />
          </button>
        </Link>
        <Link href="/">
        <div className="absolute top-6 left-8 bg-[url('/assets/logoWide.png')] bg-no-repeat bg-contain h-10 w-80" />
          </Link>
      </div>
    </>
  );
};