import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import NavigationComponent from "@/components/common/NavigationComponent";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "900"] });

export const metadata: Metadata = {
  title: "Mzxit (Pty) Ltd",
  description:
    "We are a forward-thinking technology company dedicated to providing innovative solutions to enhance business operations and streamline processes.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-dark-2`}>
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
