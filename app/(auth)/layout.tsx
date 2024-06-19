import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClassNova (Pty) Ltd",
  description:
    "We are a forward-thinking technology company dedicated to providing innovative solutions to enhance business operations and streamline processes.",
  icons: {
    icon: "/logo.png",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={`${inter.className} bg-dark-2`}>{children}</main>;
}
