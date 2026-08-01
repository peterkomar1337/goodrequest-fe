import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

// latin-ext covers Slovak diacritics.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nadácia Good Boy",
  description:
    "Podporte slovenské útulky pre psov. Prispejte celej nadácii alebo konkrétnemu útulku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
