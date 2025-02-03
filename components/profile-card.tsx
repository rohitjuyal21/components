"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimateNumber from "./AnimateNumber";
import { motion } from "motion/react";

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950">
      <motion.div
        whileHover="hover"
        className="relative z-10 h-28 w-28 rounded-full shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ scale: 1 }}
          variants={{ hover: { scale: 1.1 } }}
          transition={{
            type: "spring",
            stiffness: 200,
            bounce: 1,
          }}
          className="relative h-full w-full overflow-hidden rounded-full"
        >
          <Image
            src="/assets/profile-card.png"
            alt="profile"
            fill
            className="h-full w-full flex-shrink-0 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ scaleY: 0, x: "-50%" }}
          variants={{ hover: { scaleY: 1 } }}
          className="absolute -top-14 left-1/2 -z-10 flex h-28 w-[350px] origin-bottom -translate-x-1/2 justify-center rounded-t-xl bg-gradient-to-b from-blue-700 to-blue-500"
        ></motion.div>
        <div className="absolute left-1/2 top-14 -z-10 w-[350px] origin-top -translate-x-1/2 scale-y-100 rounded-b-xl bg-white p-6 pt-16 shadow-xl shadow-white/20 transition-all delay-300 duration-500 group-hover:scale-y-100">
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
          <div className="mt-8 flex gap-4">
            <button className="group/button flex-1 rounded-md bg-black text-sm font-medium">
              <span className="inline-block h-full w-full rounded-md bg-gradient-to-b from-blue-400 to-blue-800 px-4 py-2 text-white transition-all duration-200 group-hover/button:-translate-x-1 group-hover/button:-translate-y-1 group-active/button:translate-x-0 group-active/button:translate-y-0">
                Follow
              </span>
              <span className="absol"></span>
            </button>
            <button className="group/button flex-1 rounded-md bg-black text-sm font-medium">
              <span className="inline-block h-full w-full rounded-md border border-neutral-300 bg-white px-4 py-2 transition-all duration-200 group-hover/button:-translate-x-1 group-hover/button:-translate-y-1 group-active/button:translate-x-0 group-active/button:translate-y-0">
                Message
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
