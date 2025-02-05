"use client";
import React from "react";
import { motion } from "motion/react";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

const socials = [
  {
    name: "Peerlist",
    icon: SiPeerlist,
    color: "#00aa45",
    href: "#",
    username: "@rohitjuyal",
  },
  {
    name: "Github",
    icon: FaGithub,
    color: "#0d1116",
    username: "@rohitjuyal21",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "#0077B5",
    href: "#",
    username: "@rohitjuyal2003",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    color: "#000000",
    href: "#",
    username: "@rohitjuyal21",
  },
];

export default function SocialButtonsWithHangBoard() {
  return (
    <div className="flex gap-4">
      {socials.map((social, index) => (
        <motion.div
          key={index}
          whileHover="hover"
          animate="exit"
          className="relative"
        >
          <motion.button
            initial={{ width: 48, height: 48 }}
            variants={{
              hover: { width: 128 },
              exit: {
                width: 48,
                transition: { duration: 0.3, delay: 0.5 },
              },
            }}
            className="relative hover:shadow-lg"
          >
            <motion.span
              initial={{ rotate: 0, borderRadius: "50%" }}
              variants={{
                hover: {
                  rotate: -80,
                  borderRadius: "0%",
                  y: -83,
                  x: -29,
                  transition: {
                    default: { duration: 0.3, delay: 0.3 },
                    borderRadius: { duration: 0.3, delay: 0 },
                  },
                },
                exit: {
                  borderRadius: "50%",
                  transition: { delay: 0.5 },
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className={`absolute inset-0 z-20 flex items-center justify-center`}
              style={{ background: social.color }}
            >
              <social.icon className="h-6 w-6 text-white" />
            </motion.span>
            <motion.span
              initial={{ borderRadius: "50%" }}
              variants={{
                hover: { borderRadius: 0 },
                exit: {
                  borderRadius: "50%",
                  transition: { delay: 0.5 },
                },
              }}
              className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-200 text-sm font-medium text-black"
            >
              {social.username}
            </motion.span>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
