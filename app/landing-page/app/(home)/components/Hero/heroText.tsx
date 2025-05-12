import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsHero() {
  const words = ["Institutions", "Protocols", "Funds", "Firms", "Reserves", "Normies", "Crypto Bros"];

  return (
    <div className="h-[5rem] flex justify-center items-left px-4 w-full text-center mt-4 title2-div" style={{ zIndex: "9999" }}>
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 title2" style={{ color: "#e0b684" }}>
        Aim To Serve For <FlipWords words={words} />
      </div>
    </div>
  );
}
