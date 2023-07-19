import { Header } from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Menu } from "@/components/menu/Menu";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Insta Recipe",
  description: "Find your recipe now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  );
}
