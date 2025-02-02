"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimateNumber from "./AnimateNumber";

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
      <div
        className="group relative z-10 h-28 w-28 rounded-full shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src="/assets/profile-card.png"
            alt="profile"
            fill
            className="h-full w-full flex-shrink-0 object-cover"
          />
        </div>
        <div className="to absolute -top-14 left-1/2 -z-10 h-28 w-[350px] origin-bottom -translate-x-1/2 scale-y-0 rounded-t-xl bg-gradient-to-b from-blue-700 to-blue-500 transition-all duration-500 group-hover:scale-y-100"></div>
        <div className="absolute left-1/2 top-14 -z-10 w-[350px] origin-top -translate-x-1/2 scale-y-0 rounded-b-xl bg-white p-6 pt-16 shadow-xl shadow-white/20 transition-all delay-300 duration-500 group-hover:scale-y-100">
          <h4 className="text-center text-lg font-medium leading-tight text-gray-900">
            Walter White
          </h4>
          <h6 className="text-center text-sm text-neutral-500">@walterwhite</h6>
          <p className="pb-6 pt-4 text-center text-sm text-neutral-500">
            Front-end Developer
          </p>
          <div className="grid grid-cols-3 place-content-center place-items-center">
            <div className="flex flex-col items-center">
              <AnimateNumber
                value={1000}
                isHovered={isHovered}
                className="font-medium"
              />

              <h6 className="text-sm text-neutral-500">Followers</h6>
            </div>
            <div className="flex flex-col items-center">
              <AnimateNumber
                value={641}
                isHovered={isHovered}
                className="font-medium"
              />
              <h6 className="text-sm text-neutral-500">Following</h6>
            </div>
            <div className="flex flex-col items-center">
              <AnimateNumber
                value={50}
                isHovered={isHovered}
                className="font-medium"
              />
              <h6 className="text-sm text-neutral-500">Posts</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
