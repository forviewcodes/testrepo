"use client";

import PreviousExperience from "@/components/PreviousExperience";

export default function ExperiencesPage() {
  return (
    <div className="pb-8">
      <h1 className="text-5xl font-bold pb-8">
        <span className="bg-gradient-to-br from-[rgb(249,115,22)] to-[#EAB308] bg-clip-text text-transparent">
          Experiences
        </span>
      </h1>
      <PreviousExperience sub={false} />
    </div>
  );
}
