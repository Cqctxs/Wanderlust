"use client";

import { Globes } from "@/components/ui/navbar/globes";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export const Frame = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-white drop-shadow-md">
        {/* Background and title */}
        <div>
          <div className="absolute inset-0 w-full h-8 bg-wh"></div>
          <div className="absolute top-[31px] left-0 bg-[url('/assets/top_left.png')] bg-no-repeat bg-contain h-20 w-80"></div>
          <div className="absolute top-[31px] right-0 bg-[url('/assets/top_right.png')] bg-no-repeat bg-contain h-20 w-80"></div>

          {/* Logo */}
          <Link href="/">
            <div className="absolute top-[26px] left-4 bg-[url('/assets/logoWide.png')] bg-no-repeat bg-contain h-20 w-60"></div>
          </Link>

          {/* Navigation Button */}
          <Link href="/map">
            <button className="absolute top-[18px] right-[86px] flex items-center space-x-3">
              <Globes start={0} />
              <Globes start={1} />
              <Globes start={2} />
            </button>
          </Link>
          <Link href="/user">
            {user ? (
              <img
                className="absolute top-[21px] right-[24px] h-[50px] w-[50px] rounded-full border-4 border-[#2176FF] transition-transform transform hover:scale-110"
                src={user.picture}
                alt={user.name}
              />
            ) : (
              <button className="absolute top-[21px] -right-[166px] bg-[url('/assets/userIcon.png')] bg-no-repeat bg-contain h-[50px] w-60 transition-transform transform hover:scale-110"></button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
