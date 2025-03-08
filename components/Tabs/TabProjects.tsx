"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { collabProjectsData } from "@/data/ProjectsData";
import { personalProjectsData } from "@/data/ProjectsData";

export default function TabProjects() {
  return (
    <Tabs.Content value="tab-projects">
      <h1 className="text-6xl font"> Collaboration Projects</h1>
      <div className="grid grid-cols-2 gap-4">
        {collabProjectsData.map((projectsData, index) => (
          <div key={index} className="size-[320px] bg-gray-300 rounded-3xl">
            <h3 className="text-white font-bold">{projectsData.title}</h3>
            <p className="text-white">{projectsData.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-6xl"> Personal Projects</h1>
      <div className="grid grid-cols-2 gap-4">
        {personalProjectsData.map((projectsData, index) => (
          <div key={index} className="size-[320px] bg-gray-300 rounded-3xl">
            <h3 className="text-white font-bold">{projectsData.title}</h3>
            <p className="text-white">{projectsData.description}</p>
          </div>
        ))}
      </div>
    </Tabs.Content>
  );
}
