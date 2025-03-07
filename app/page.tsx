import { ThemeToggler } from "@/components/ThemeToggler";
import { MonochromeIcon, MoonIcon, SepiaIcon, SunIcon } from "@/Icons";

export default function Home() {
  return (
    <div>
      <ThemeToggler
        themes={[
          { theme: "light", icon: <SunIcon /> },
          { theme: "dark", icon: <MoonIcon /> },
          { theme: "sepia", icon: <SepiaIcon /> },
          { theme: "monochrome", icon: <MonochromeIcon /> },
        ]}
      ></ThemeToggler>
    </div>
  );
}
