"use client";

import { teamMembers } from "@/data/team";
import Image from "next/image";
import { useState } from "react";
import { motion, useAnimate } from "motion/react";
import ReactCurvedText from "react-curved-text";
import { easeInOut } from "motion";

export default function TeamCircle() {
  const totalMembers = teamMembers.length;
  const [activeMember, setActiveMember] = useState("");
  console.log(activeMember);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative flex h-[700px] w-[700px] items-center justify-center rounded-full transition-all duration-500">
        {teamMembers.map((member, index) => {
          const angle = (index / totalMembers) * 360;
          const isActive = activeMember === member.name;
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                transform: `rotate(0deg) translateX(250px)  scale(1)`,
              }}
              animate={{
                opacity: 1,
                transform: isActive
                  ? `rotate(${angle}deg) translateX(0) rotate(-${angle}deg) scale(1.7)`
                  : `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg) scale(1)`,
              }}
              transition={{
                duration: 0.8,
              }}
              onClick={() => setActiveMember(member.name)}
              className={`absolute flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-green-500 transition-transform duration-300 ${isActive ? "shadow-[0_0_10px_4px] shadow-green-400/30" : ""}`}
            >
              <div className="h-full w-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <motion.div
                initial={{ rotate: 90, opacity: 0 }}
                whileHover={{ rotate: 0, opacity: 1 }}
                animate={{
                  rotate: isActive ? 0 : 90,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="absolute -inset-6"
              >
                <ReactCurvedText
                  width="100%"
                  height="100%"
                  cx={63}
                  cy={63}
                  rx={46}
                  ry={46}
                  startOffset={30}
                  reversed={true}
                  text={`${member.name} - ${member.profession}`}
                  textProps={{
                    style: {
                      fontSize: "10px",
                      fontWeight: 500,
                      fill: "#16a34a",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    },
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
