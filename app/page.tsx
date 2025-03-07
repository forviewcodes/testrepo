import * as Tabs from "@radix-ui/react-tabs";
import NavbarContents from "@/components/NavbarContent";
import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div>
      <Tabs.Root defaultValue="tab-home" className="w-full">
        <Navbar></Navbar>
        <div className="flex items-center justify-center">
          <Avatar></Avatar>
          <NavbarContents></NavbarContents>
        </div>
      </Tabs.Root>
    </div>
  );
}
