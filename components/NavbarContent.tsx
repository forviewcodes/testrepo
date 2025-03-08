import TabExperiences from "./Tabs/TabExperiences";
import TabProjects from "./Tabs/TabProjects";
import TabTools from "./Tabs/TabTools";
import TabContacts from "./Tabs/TabContacts";
import TabHome from "./Tabs/TabHome";
import { clx } from "@/lib/utils";

export default function NavbarContents() {
  return (
    <div
      className={clx(
        "w-[660px]"
        //  "bg-red-600"
      )}
    >
      <TabHome></TabHome>
      <TabProjects></TabProjects>
      <TabTools></TabTools>
      <TabExperiences></TabExperiences>
      <TabContacts></TabContacts>
    </div>
  );
}
