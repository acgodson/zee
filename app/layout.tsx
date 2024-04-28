import LayoutWrapper from "@/library/components/template/LayoutWrapper";
import "@/library/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zee",
  description:
    "Create a zee profile today and protect your defi space.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
