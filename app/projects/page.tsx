"use client";
import Link from "next/link";
import Image from "next/image";
import { collabProjectsData, personalProjectsData } from "@/data/ProjectsData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsPage() {
  const collabRef = useRef(null);
  const personalRef = useRef(null);
  const isCollabInView = useInView(collabRef, { once: true });
  const isPersonalInView = useInView(personalRef, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <h1 className="text-6xl font-bold pb-4">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          Collaborative{" "}
        </span>
        Projects
      </h1>

      <div ref={collabRef} className="grid grid-cols-2 gap-6">
        {collabProjectsData.map((projectsData, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isCollabInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Link href={`/projects/${projectsData.path}`}>
              <div className="size-[320px] bg-gray-300 rounded-3xl overflow-clip">
                <Image
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
          </motion.div>
        ))}
      </div>

      <h1 className="text-6xl font-bold pb-4 pt-20">
        <span className="bg-gradient-to-br from-[#F97316] to-[#EAB308] bg-clip-text text-transparent">
          Personal{" "}
        </span>
        Projects
      </h1>

      <div ref={personalRef} className="grid grid-cols-2 gap-6">
        {personalProjectsData.map((projectsData, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isPersonalInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Link href={`/projects/${projectsData.path}`}>
              <div className="size-[320px] bg-gray-300 rounded-3xl overflow-clip">
                <Image
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
          </motion.div>
        ))}
      </div>
    </>
  );
}
