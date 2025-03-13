"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clx } from "@/lib/utils";

import {
  HomeIcon,
  FolderIcon,
  WrenchIcon,
  BriefcaseIcon,
  PhoneIcon,
  MonochromeIcon,
  MoonIcon,
  SepiaIcon,
  SunIcon,
} from "@/Icons";
import { IconAnimation } from "./IconAnimation";
import { ThemeToggler } from "./ThemeToggler";
import { IconInfo } from "./IconInfo";

export default function Navbar() {
  const pathname = usePathname();
  const tabs = [
    { href: "/home", label: "Home", icon: <HomeIcon /> },
    { href: "/projects", label: "Projects", icon: <FolderIcon /> },
    { href: "/tools", label: "Tools", icon: <WrenchIcon /> },
    { href: "/experiences", label: "Experiences", icon: <BriefcaseIcon /> },
    { href: "/contacts", label: "Contact", icon: <PhoneIcon /> },
  ];

  return (
    <div className="p-10 items-center justify-center flex">
      <div className="flex items-center justify-between bg-gray-400 p-4 py-2 rounded-xl gap-2">
        <ThemeToggler
          themes={[
            { theme: "light", icon: <SunIcon /> },
            { theme: "dark", icon: <MoonIcon /> },
            { theme: "sepia", icon: <SepiaIcon /> },
            { theme: "monochrome", icon: <MonochromeIcon /> },
          ]}
        />

        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={clx(
              "p-2 rounded-xl relative group overflow-visible",
              pathname.startsWith(tab.href)
                ? "bg-gradient-to-br from-[#F97316] to-[#EAB308]"
                : ""
            )}
          >
            <div className="relative z-10 flex items-center">{tab.icon}</div>
            <IconAnimation />
            <IconInfo>{tab.label}</IconInfo>
          </Link>
        ))}
      </div>
    </div>
  );
}
