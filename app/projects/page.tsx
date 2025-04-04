"use client";

import Link from "next/link";
import Image from "next/image";
import { collabProjectsData, personalProjectsData } from "@/data/ProjectsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

type Project = {
  path: string;
  image: string;
  title: string;
  description: string;
};

type ProjectSectionProps = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
  projects: Project[];
};

function ProjectSection({
  title,
  gradientFrom,
  gradientTo,
  projects,
}: ProjectSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full">
      <h2 className="text-5xl font-bold py-8 text-center">
        <span
          className={`bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}] bg-clip-text text-transparent`}
        >
          {title}{" "}
        </span>
        Projects
      </h2>

      <div
        ref={ref}
        className="grid grid-cols-1 gap-6 items-center justify-items-center"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Link href={`/projects/${project.path}`}>
              <div className="h-[300px] w-fit bg-gray-300 rounded-3xl overflow-clip cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={230}
                  quality={100}
                />
                <div className="flex flex-col w-full items-start justify-start text-start p-4 pl-6">
                  <h3 className="font-bold text-2xl">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full px-4">
      <ProjectSection
        title="Collaborative"
        gradientFrom="#F97316"
        gradientTo="#EAB308"
        projects={collabProjectsData}
      />

      <ProjectSection
        title="Personal"
        gradientFrom="#F97316"
        gradientTo="#EAB308"
        projects={personalProjectsData}
      />
    </main>
  );
}
