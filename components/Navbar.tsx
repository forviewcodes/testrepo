"use client";
import {
  SunIcon,
  MoonIcon,
  SepiaIcon,
  MonochromeIcon,
  HomeIcon,
  FolderIcon,
  WrenchIcon,
  BriefcaseIcon,
  PhoneIcon,
} from "@/Icons";
import * as Tabs from "@radix-ui/react-tabs";
import { ThemeToggler } from "./ThemeToggler";
import { clx } from "@/lib/utils";
import { IconAnimation } from "./IconAnimation";

export default function Navbar() {
  const tabs = [
    { value: "tab-home", icon: <HomeIcon /> },
    { value: "tab-projects", icon: <FolderIcon /> },
    { value: "tab-tools", icon: <WrenchIcon /> },
    { value: "tab-experiences", icon: <BriefcaseIcon /> },
    { value: "tab-contacts", icon: <PhoneIcon /> },
  ];

  return (
    <div className="p-10 items-center justify-center flex">
      <Tabs.List
        aria-label="tabs"
        className="flex items-center justify-between bg-gray-500 p-4 py-2 rounded-xl "
      >
        <ThemeToggler
          themes={[
            { theme: "light", icon: <SunIcon /> },
            { theme: "dark", icon: <MoonIcon /> },
            { theme: "sepia", icon: <SepiaIcon /> },
            { theme: "monochrome", icon: <MonochromeIcon /> },
          ]}
        ></ThemeToggler>

        {tabs.map(({ value, icon }) => (
          <Tabs.Trigger
            key={value}
            value={value}
            className={clx(
              "p-2 rounded-xl relative group overflow-hidden",
              "data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308]"
            )}
          >
            <div className="relative z-10">{icon}</div>
            <IconAnimation />
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </div>
  );
}
