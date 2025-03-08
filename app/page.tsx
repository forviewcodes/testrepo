import * as Tabs from "@radix-ui/react-tabs";
import NavbarContents from "@/components/NavbarContent";
import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="container items-center justify-center flex">
      <Tabs.Root defaultValue="tab-home" className="w-full">
        <Navbar></Navbar>
        <div className="flex justify-center space-x-20">
          <Avatar></Avatar>
          <NavbarContents></NavbarContents>
        </div>
      </Tabs.Root>
    </div>
  );
}
