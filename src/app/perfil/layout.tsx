"use client";
import { UserProvider } from "@/providers/user/userProvider";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
