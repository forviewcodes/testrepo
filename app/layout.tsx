import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { clx } from "@/lib/utils";
import Avatar from "@/components/Avatar";
import Navbar from "@/components/Navbar";

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
          `${outfit.variable} antialiased`,
          "items-center justify-center flex flex-col font-outfit"
        )}
      >
        <ThemeProvider>
          <Navbar></Navbar>
          <div className="flex justify-center gap-x-20 ">
            <Avatar />
            <div className="w-[660px]">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
