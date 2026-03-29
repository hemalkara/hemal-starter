import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Barlow } from 'next/font/google'
import "./globals.css";
import { LenisProvider } from "@/components/animations/LenisProvider";

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Hemal Starter Kit",
  description: "Starter template for interactive landing pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="antialiased font-body">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
