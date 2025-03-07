import { SunIcon, MoonIcon, SepiaIcon, MonochromeIcon } from "@/Icons";
import { ThemeToggler } from "./ThemeToggler";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center h-16">
        <div className="items-center justifu-center flex bg-gray-600">
          <ThemeToggler
            themes={[
              { theme: "light", icon: <SunIcon /> },
              { theme: "dark", icon: <MoonIcon /> },
              { theme: "sepia", icon: <SepiaIcon /> },
              { theme: "monochrome", icon: <MonochromeIcon /> },
            ]}
          ></ThemeToggler>

          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            About
          </a>
          <a href="#" className="text-lg">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
