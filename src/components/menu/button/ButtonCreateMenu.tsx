"use client";

import { useAuth } from "@/providers/user/userProvider";
import Link from "next/link";

export function ButtonCreateMenu() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center mt-[-10px]">
      <Link
        href={user?.name ? "/recipe/create" : "/user/login"}
        className="mt-[-16px] self-center rounded-full bg-green-700
        h-12 w-12 text-3xl font-bold flex items-center justify-center"
      >
        +
      </Link>
      <p>Criar</p>
    </div>
  );
}
