import TabExperiences from "./Tabs/TabExperiences";
import TabProjects from "./Tabs/TabProjects";
import TabTools from "./Tabs/TabTools";
import TabContacts from "./Tabs/TabContacts";
import TabHome from "./Tabs/TabHome";

export default function NavbarContents() {
  return (
    <>
      <TabHome></TabHome>
      <TabProjects></TabProjects>
      <TabTools></TabTools>
      <TabExperiences></TabExperiences>
      <TabContacts></TabContacts>
    </>
  );
}
