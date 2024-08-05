"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";

export const Frame = () => {
  return (
    <div className="z-0 drop-shadow-or fixed inset-0">
      <div className="absolute h-full w-6 bg-or" />
      <div className="absolute right-0 h-full w-6 bg-or" />
      <div className="absolute h-6 w-full bg-or" />
      <div className="absolute bottom-0 h-6 w-full bg-or" />
      <div className="absolute top-6 left-6 bg-[url('/assets/top_left.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute top-6 right-6 bg-[url('/assets/top_right.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute bottom-6 left-6 bg-[url('/assets/bottom_left.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute bottom-6 right-6 bg-[url('/assets/bottom_right.svg')] bg-no-repeat h-20 w-80" />
      <Link href="/map">
        <button className="flex justify-between top-3 right-10 fixed w-60">
          <Globes start={0} />
          <Globes start={1} />
          <Globes start={2} />
        </button>
      </Link>
      <Link href="/">
        <button className="absolute font-offbit top-1 left-4 text-[3.5rem] text-bl drop-shadow-wh">wanderlust</button>
      </Link>
    </div>
  );
};