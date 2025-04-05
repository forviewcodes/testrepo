"use client";
import { HomeIcon } from "@/Icons";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExpInfo } from "@/data/ExpInfo";

export default function ExperiencesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="pb-8">
      <h1 className="text-5xl font-bold pb-8">
        <span className="bg-gradient-to-br from-[rgb(249,115,22)] to-[#EAB308] bg-clip-text text-transparent">
          Experiences
        </span>
      </h1>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div ref={ref} className="gap-4 flex flex-col">
          {ExpInfo.map((exp, index) => (
            <Link key={index} href={exp.href}>
              <div className="bg-gray-400 h-auto rounded-2xl flex justify-between p-6">
                <div>
                  <div className="text-4xl font-semibold">{exp.name}</div>
                  <div className="py-4 text-lg">{exp.details}</div>
                  <div>{exp.year}</div>
                </div>
                <HomeIcon className="shrink-0"></HomeIcon>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
