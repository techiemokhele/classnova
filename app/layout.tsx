import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "500", "900"] });

export const metadata: Metadata = {
  title: "ClassNova (Pty) Ltd",
  description:
    "We are a forward-thinking technology company dedicated to providing innovative solutions to enhance business operations and streamline processes.",
  icons: {
    icon: "/icons/favicon-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-dark-2`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
