import { ArrowRight } from "lucide-react";
import React from "react";

export default function BeamInput() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <div className="relative z-10 overflow-hidden rounded-full bg-neutral-800 p-[1px]">
        <div className="animate-rotate absolute inset-0 -z-10 bg-[conic-gradient(#0369a1_30deg,#38bdf8_60deg,transparent_80deg)]"></div>
        <div className="flex h-14 w-[400px] items-center rounded-full bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
          <input
            type="text"
            className="flex-1 border-none bg-transparent pl-6 pr-4 outline-none"
          />
          <button className="group mr-2 flex items-center justify-center rounded-full bg-gradient-to-b from-neutral-100 to-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-950">
            Subscribe
            <ArrowRight className="ml-0 size-0 translate-x-16 transition-all duration-300 ease-in-out group-hover:ml-1 group-hover:size-4 group-hover:translate-x-0 group-active:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
