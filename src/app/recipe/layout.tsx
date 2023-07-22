import { Header } from "@/components/header/Header";
import "../globals.css";
import type { Metadata } from "next";

import { Menu } from "@/components/menu/Menu";
import { RecipeProvider } from "../../providers/recipe/RecipeProvider";

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
      <Header />
      <Menu />
      {children}
    </RecipeProvider>
  );
}
