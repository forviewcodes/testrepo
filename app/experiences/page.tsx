"use client";
import { HomeIcon } from "@/Icons";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExpInfo } from "@/data/ExpInfo";
import PreviousExperience from "@/components/PreviousExperience";

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
      <PreviousExperience />
    </div>
  );
}
