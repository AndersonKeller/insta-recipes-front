"use client";

import { useState } from "react";

interface ButtonCreateMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function ButtonCreateMenu({ ...rest }: ButtonCreateMenuProps) {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(!open);
  }
  return (
    <div className="fixed flex flex-col w-full bottom-[36px] left-0">
      {open && (
        <div
          className="w-max absolute bottom-0 left-[62px] gap-2 flex-col flex items-center 
      justify-between"
        >
          <button className="text-xs py-2 shadow-md px-3 bg-gray-600 rounded-2xl text-center lowercase">
            Comentar
          </button>
          <button className="text-xs py-2 shadow-md px-3 bg-gray-600 rounded-2xl text-center lowercase">
            Criar
          </button>
        </div>
      )}
      <button
        onClick={() => openMenu()}
        {...rest}
        className="mt-[-16px] self-center rounded-full bg-green-700
        h-12 w-12 text-3xl font-bold flex items-center justify-center"
      >
        {open ? "x" : "+"}
      </button>
    </div>
  );
}
