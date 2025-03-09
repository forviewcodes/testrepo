import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { clx } from "@/lib/utils";
import Tabs from "@/components/Navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harris Azmi",
  description: "Harris Azmi Portfolio version 2.0.0 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clx(
          `${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`,
          "items-center justify-center flex flex-col"
        )}
      >
        <ThemeProvider>
          <div>Navbar</div>
          <Tabs></Tabs>
          <div className="flex">
            <div>Avatar</div>
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
