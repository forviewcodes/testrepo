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

export default function Navbar() {
  return (
    <div className="p-10 items-center justify-center flex">
      <Tabs.List
        aria-label="tabs"
        className="flex items-center justify-center space-x-4 bg-gray-500 p-4 py-2 w-fit rounded-xl"
      >
        <ThemeToggler
          themes={[
            { theme: "light", icon: <SunIcon /> },
            { theme: "dark", icon: <MoonIcon /> },
            { theme: "sepia", icon: <SepiaIcon /> },
            { theme: "monochrome", icon: <MonochromeIcon /> },
          ]}
        ></ThemeToggler>

        <Tabs.Trigger
          value="tab-home"
          className="p-2 data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-lg"
        >
          {/* home */}
          <HomeIcon />
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab-projects"
          className="p-2 data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-lg"
        >
          {/* Projects  */}
          <FolderIcon />
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab-tools"
          className="p-2 data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-lg"
        >
          {/* Tools */}
          <WrenchIcon />
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab-experiences"
          className="p-2 data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-lg"
        >
          {/* Experience */}
          <BriefcaseIcon />
        </Tabs.Trigger>

        <Tabs.Trigger
          value="tab-contacts"
          className="p-2 data-[state=active]:bg-gradient-to-br from-[#F97316] to-[#EAB308] rounded-lg"
        >
          {/* Contact */}
          <PhoneIcon />
        </Tabs.Trigger>
      </Tabs.List>
    </div>
  );
}
