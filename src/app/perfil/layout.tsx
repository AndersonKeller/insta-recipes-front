"use client";

import { Header } from "@/components/header/Header";
import "../globals.css";
import { UserProvider } from "@/providers/user/userProvider";
import { Menu } from "@/components/menu/Menu";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <Header />
      <Menu />
      {children}
    </UserProvider>
  );
}
