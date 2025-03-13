import Link from "next/link";
import Image from "next/image";
import { collabProjectsData, personalProjectsData } from "@/data/ProjectsData";

export default function TabProject() {
  return (
    <>
      <h1 className="text-6xl font-bold pb-4">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          Collaborative{" "}
        </span>
        Projects
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {collabProjectsData.map((projectsData, index) => (
          <Link key={index} href={`/projects/${projectsData.path}`}>
            <div
              key={index}
              className="size-[320px] bg-gray-300 rounded-3xl overflow-clip"
            >
              <Image
                key={index}
                src={projectsData.image}
                alt={projectsData.title}
                width={320}
                height={230}
                quality={100}
              />
              <div className="flex flex-col w-full items-start text-start justify-start p-4 pl-6">
                <h3 className="font-bold text-2xl">{projectsData.title}</h3>
                <p>{projectsData.description}</p>
              </div>
            </div>
          </Link>
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
          <Link key={index} href={`/projects/${projectsData.path}`}>
            <div
              key={index}
              className="size-[320px] bg-gray-300 rounded-3xl overflow-clip"
            >
              <Image
                key={index}
                src={projectsData.image}
                alt={projectsData.title}
                width={320}
                height={230}
                quality={100}
              />
              <div className="flex flex-col w-full items-start text-start justify-start p-4 pl-6">
                <h3 className="font-bold text-2xl">{projectsData.title}</h3>
                <p>{projectsData.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
