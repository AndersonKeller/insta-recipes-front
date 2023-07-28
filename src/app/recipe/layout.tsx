"use client";
import { Header } from "@/components/header/Header";
import "../globals.css";
import type { Metadata } from "next";

import { Menu } from "@/components/menu/Menu";
import { RecipeProvider } from "../../providers/recipe/RecipeProvider";
import { UserProvider } from "@/providers/user/userProvider";

export const metadata: Metadata = {
  title: "Insta Recipe",
  description: "Find your recipe now",
};

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecipeProvider>
      <UserProvider>
        <Header />
        <Menu />
        {children}
      </UserProvider>
    </RecipeProvider>
  );
}
