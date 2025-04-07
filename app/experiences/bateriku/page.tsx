"use client";
import { Button } from "@/components/Button";
import { ExpGovTech, ExpInfo } from "@/data/ExpInfo";
import { ArrowLeftIcon, HomeIcon } from "@/Icons";
import ReactMarkdown from "react-markdown";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function BaterikuPage() {
  const pathname = usePathname();
  const modifiedPathname = pathname.replace("/experiences/", "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="pb-4">
      <Link href="/experiences">
        <Button className="flex gap-4">
          <ArrowLeftIcon />
          All Experiences
        </Button>
      </Link>
      <div className="py-8 flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-5xl pb-1">{ExpGovTech.name}</h1>
          <p>{ExpGovTech.year}</p>
        </div>
        <div>
          <h2 className="font-bold text-4xl pb-4">Overview</h2>
          <p>{ExpGovTech.overview}</p>
        </div>
        <div>
          <h2 className="font-bold text-4xl pb-4">My Role</h2>
          <p>{ExpGovTech.myRole}</p>
        </div>
        <div>
          <h2 className="font-bold text-4xl pb-6">
            Skills Acquired and Contributions
          </h2>
          <div className="space-y-4">
            {ExpGovTech.keyAchievementsAndContributions.map(
              (achievement, index) => (
                <div key={index} className="">
                  <h3 className="font-semibold text-xl">
                    {achievement.heading}
                  </h3>
                  <ul>
                    {achievement.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <>{children}</>,
                            strong: ({ children }) => (
                              <strong className="font-bold">{children}</strong>
                            ),
                          }}
                        >
                          {detail}
                        </ReactMarkdown>
                      </div>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-4xl pb-4">Impact</h2>
          <p>{ExpGovTech.impact}</p>
        </div>

        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-8 py-2">Company Link</Button>
        </Link>
      </div>

      <h1 className="font-bold text-5xl pb-6">Previous Experiences</h1>
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div ref={ref} className="gap-4 flex flex-col">
          {ExpInfo.map((exp, index) => {
            if (modifiedPathname === exp.name.toLowerCase()) {
              return null;
            }

            return (
              <Link key={index} href={exp.href}>
                <div className="bg-gray-400 h-auto rounded-2xl flex justify-between p-6">
                  <div>
                    <div className="text-4xl font-semibold">{exp.name}</div>
                    <div className="py-4 text-lg">{exp.details}</div>
                    <div>{exp.year}</div>
                  </div>
                  <HomeIcon className="shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
