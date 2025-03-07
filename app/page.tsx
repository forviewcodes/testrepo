import * as Tabs from "@radix-ui/react-tabs";
import NavbarContents from "@/components/NavbarContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Tabs.Root defaultValue="tab1" className="w-full">
        <Navbar></Navbar>
        <div className="flex items-center justify-center">
          <div className="h-[200px] w-[200px] bg-red-300"></div>
          <NavbarContents></NavbarContents>
        </div>
      </Tabs.Root>
    </div>
  );
}
