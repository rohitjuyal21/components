"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnimateNumber from "./AnimateNumber";
import { motion } from "motion/react";
import { MessageCircle, UserRoundPlus } from "lucide-react";

const profileStats = [
  {
    name: "Followers",
    value: 1000,
  },
  {
    name: "Following",
    value: 534,
  },
  {
    name: "Posts",
    value: 78,
  },
];

export default function ProfileCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950">
      <motion.div
        whileHover="hover"
        className="relative z-10 h-28 w-28 rounded-full shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          initial={{ scale: 0.8 }}
          variants={{ hover: { scale: 1.2, transition: { delay: 0.6 } } }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 z-10 w-full rounded-full bg-white"
        ></motion.span>
        <motion.div
          initial={{ scale: 1 }}
          variants={{ hover: { scale: 1.1 } }}
          transition={{
            type: "spring",
            stiffness: 200,
            bounce: 1,
          }}
          className="relative z-10 h-full w-full overflow-hidden rounded-full shadow-lg"
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
          transition={{ duration: 0.5 }}
          className="absolute -top-14 left-1/2 -z-10 flex h-28 w-[350px] origin-bottom -translate-x-1/2 justify-center rounded-t-xl bg-gradient-to-b from-blue-700 to-blue-500"
        ></motion.div>
        <motion.div
          initial={{ scaleY: 0, x: "-50%" }}
          variants={{ hover: { scaleY: 1 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-1/2 top-14 -z-10 w-[350px] origin-top rounded-b-xl bg-white p-6 pt-16 shadow-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            variants={{ hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <h4 className="mt-1 text-center text-lg font-medium leading-tight text-gray-900">
              Walter White
            </h4>
            <h6 className="text-center text-sm text-neutral-500">
              @walterwhite
            </h6>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            variants={{ hover: { opacity: 1, y: 0 } }}
            transition={{ delay: 1, duration: 0.3 }}
            className="pb-6 pt-4 text-center text-sm text-neutral-500"
          >
            Front-end Developer
          </motion.p>
          <div className="grid grid-cols-3 place-content-center place-items-center">
            {profileStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                variants={{ hover: { y: 0, opacity: 1 } }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <AnimateNumber
                  value={stat.value}
                  isHovered={isHovered}
                  index={index}
                  delay={1.3 + index * 0.2}
                  className="font-medium"
                />
                <h6 className="text-sm text-neutral-500">{stat.name}</h6>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={
                isHovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
              }
              transition={{ duration: 0.3, delay: 1.6 }}
              whileHover="buttonHover"
              className="relative h-9 flex-1"
            >
              <motion.span
                variants={{
                  buttonHover: { rotateX: 90, y: "-50%", opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center rounded-sm bg-blue-500 py-2 text-center text-sm font-medium text-white"
              >
                Follow
              </motion.span>
              <motion.span
                initial={{ rotateX: 90, y: "50%", opacity: 0 }}
                variants={{
                  hover: { opacity: 1 },
                  buttonHover: { rotateX: 0, y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex w-full items-center justify-center rounded-sm border border-blue-500/40 py-2 text-center text-sm font-medium text-blue-500"
              >
                <UserRoundPlus className="size-5" />
              </motion.span>
            </motion.button>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              whileHover="buttonHover"
              className="relative flex-1"
            >
              <motion.span
                variants={{
                  buttonHover: { rotateX: 90, y: "-50%", opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex w-full items-center justify-center rounded-sm border border-blue-500/40 py-2 text-center text-sm font-medium text-blue-500"
              >
                Message
              </motion.span>
              <motion.span
                initial={{ rotateX: 90, y: "50%", opacity: 0 }}
                variants={{ buttonHover: { rotateX: 0, y: 0, opacity: 1 } }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex w-full items-center justify-center rounded-sm bg-blue-500 py-2 text-center text-sm font-medium text-white"
              >
                <MessageCircle className="size-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
