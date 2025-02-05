import React from 'react'

export default function FollowMeButton() {
  return (
    // <motion.div
    //   whileHover="hover"
    //   className="relative h-16 w-64 overflow-hidden transition-all duration-300 hover:shadow-lg"
    // >
    //   <motion.span
    //     variants={{ hover: { x: "100%" } }}
    //     transition={{
    //       duration: 0.5,
    //       type: "spring",
    //       bounce: 0.3,
    //       stiffness: 90,
    //     }}
    //     className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-950 text-lg font-semibold uppercase text-white"
    //   >
    //     Follow me
    //   </motion.span>
    //   <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 bg-neutral-400">
    //     {socials.map((social, index) => (
    //       <motion.a
    //         initial={{ scale: 0 }}
    //         variants={{ hover: { scale: 1 } }}
    //         transition={{
    //           duration: 0.5,
    //           type: "spring",
    //           stiffness: 100,
    //           bounce: 0.5,
    //           delay: index * 0.1,
    //         }}
    //         // whileHover={{ scale: 1.2 }}
    //         key={social.name}
    //         href={social.href}
    //         target="_blank"
    //         className="text-white hover:text-neutral-950"
    //       >
    //         <social.icon className="h-6 w-6" />
    //       </motion.a>
    //     ))}
    //   </div>
    // </motion.div>
  )
}
