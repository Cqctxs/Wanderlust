"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";


export const Frame = () => {
  return (
    <>
      {/* Background and title */}
      <div className="z-50 fixed drop-shadow-wh inset-0">
        <div className="z-0 fixed h-full w-6 bg-wh" />
        <div className="z-0 fixed right-0 h-full w-6 bg-wh" />
        <div className="z-0 fixed h-6 w-full bg-wh" />
        <div className="z-0 fixed bottom-0 h-6 w-full bg-wh" />
        <div className="z-0 fixed top-6 left-6 bg-[url('/assets/top_left.svg')] bg-no-repeat h-20 w-80" />
        <div className="z-0 fixed top-6 right-6 bg-[url('/assets/top_right.svg')] bg-no-repeat h-20 w-80" />
        <div className="z-0 fixed bottom-6 left-6 bg-[url('/assets/bottom_left.svg')] bg-no-repeat h-20 w-80" />
        <div className="z-0 fixed bottom-6 right-6 bg-[url('/assets/bottom_right.svg')] bg-no-repeat h-20 w-80" />
        <Link href="/map">
          <button className="flex justify-between top-3 right-10 fixed w-60">
            <Globes start={0} />
            <Globes start={1} />
            <Globes start={2} />
          </button>
        </Link>
        <Link href="/">
          <button className="fixed font-offbit top-1 left-4 text-[3.5rem] text-or drop-shadow-or">wanderlust</button>
        </Link>
      </div>
    </>
  );
};