import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";
import { FooterComponent, NavigationComponent } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spendio (Pty) Ltd",
  description:
    "We are a forward-thinking technology company dedicated to providing innovative solutions to enhance business operations and streamline processes.",
  icons: {
    icon: "/icons/favicon-white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductProvider>
      <CartProvider>
        <main className={`${inter.className} bg-dark-2`}>
          <NavigationComponent />
          {children}
          <FooterComponent />
        </main>
      </CartProvider>
    </ProductProvider>
  );
}
