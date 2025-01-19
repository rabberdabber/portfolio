"use client";

import { useState } from "react";
import useSound from "use-sound";

export const usePageTurn = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [play] = useSound("/page-flip.mp3");

  const turnPage = (direction: "next" | "prev") => {
    play();
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage((prev) => Math.max(0, prev - 1));
    }
  };

  return {
    currentPage,
    turnPage,
  };
};
