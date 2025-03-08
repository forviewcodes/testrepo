"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { collabProjectsData } from "@/data/ProjectsData";
import { personalProjectsData } from "@/data/ProjectsData";

export default function TabProjects() {
  return (
    <Tabs.Content value="tab-projects">
      <h1 className="text-6xl font-bold pb-4">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          Collaborative{" "}
        </span>
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {collabProjectsData.map((projectsData, index) => (
          // <a href="https://www.google.com">
          <div
            key={index}
            className="size-[320px] bg-gray-300 rounded-3xl overflow-clip"
          >
            <div key={index} className="w-[320px] h-[220px] bg-red-400"></div>
            <div className="flex flex-col w-full items-start text-start justify-start p-4 pl-6">
              <h3 className="font-bold text-2xl">{projectsData.title}</h3>
              <p>{projectsData.description}</p>
            </div>
          </div>
          // </a>
        ))}
      </div>

      <h1 className="text-6xl font-bold pb-4 pt-20">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          Personal{" "}
        </span>
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {personalProjectsData.map((projectsData, index) => (
          <div
            key={index}
            className="size-[320px] bg-gray-300 rounded-3xl overflow-clip"
          >
            <div key={index} className="w-[320px] h-[220px] bg-red-400"></div>
            <div className="flex flex-col w-full items-start text-start justify-start p-4 pl-6">
              <h3 className="font-bold text-2xl">{projectsData.title}</h3>
              <p>{projectsData.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Tabs.Content>
  );
}
