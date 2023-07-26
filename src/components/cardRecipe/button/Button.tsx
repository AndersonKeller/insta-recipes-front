"use client";
import { ReactNode, useState } from "react";

interface ButtonProps {
  legend: string;
  children: ReactNode;
}
export function Button({ legend, children }: ButtonProps) {
  const [showLegend, setShowLegend] = useState(false);
  function toggleLegend() {
    setShowLegend(!showLegend);
  }
  return (
    <button
      onMouseEnter={toggleLegend}
      onMouseLeave={toggleLegend}
      className="rounded-full p-1 
            flex items-center hover:bg-red-400 px-1 "
    >
      {showLegend && <span className="text-xs lowercase">{legend}</span>}
      {children}
    </button>
  );
}
