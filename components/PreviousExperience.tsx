import { ExpInfo } from "@/data/ExpInfo";
import { HomeIcon } from "@/Icons";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function PreviousExperience() {
  const pathname = usePathname();
  const modifiedPathname = pathname.replace("/experiences/", "");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
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
    </>
  );
}
