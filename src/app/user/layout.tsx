"use client";
import { Menu } from "@/components/menu/Menu";
import "../globals.css";
import { UserProvider } from "@/providers/user/userProvider";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" w-full h-screen flex items-center justify-center">
      <section className="flex flex-col bg-gray-600/80 w-full p-4 h-max rounded-lg">
        <UserProvider>{children}</UserProvider>
      </section>
      <Menu />
    </main>
  );
}
