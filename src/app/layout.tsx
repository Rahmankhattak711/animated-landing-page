import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";

const archive = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Animated Landing Page",
  description: "Animated Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-stone-900 bg-stone-200 ${archive.variable} font-sans `}
      >
        {children}
      </body>
    </html>
  );
}
