"use client";
import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";

export default function NextButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative flex h-12 items-center justify-end rounded-full border-none bg-neutral-200 outline-none transition-all duration-300 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-gray-300 active:bg-black/80"
    >
      <div className="px-12 text-center text-lg font-medium">Next</div>
      <div className="relative mr-0 flex size-0 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 group-hover:mr-2 group-hover:size-8">
        <ArrowRightIcon
          className={`absolute size-0 transition-all duration-300 group-hover:size-5 ${
            isClicked ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"
          }`}
        />
        <ArrowRightIcon
          className={`absolute size-0 transition-all duration-300 group-hover:size-5 ${
            isClicked
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
