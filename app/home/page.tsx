"use client";

import { clx } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div
          ref={ref}
          className={clx(
            "flex flex-col items-center space-y-6 pt-8",
            "lg:items-start lg:pt-0"
          )}
        >
          <h1 className="text-4xl font-extrabold lg:text-left">
            Developing Solutions,
            <br /> Creating Opportunities
          </h1>

          <p>
            More than just code. <br />
            Smart solutions that drive growth, enhance experiences, and build
            connections.
          </p>

          <h1 className="text-6xl font-extrabold">Testing</h1>
          <h2 className="text-2xl font-semibold ">Frontend Developer</h2>
          <p className="max-w-lg lg:max-w-2xl text-lg ">
            Crafting seamless and engaging user experiences through modern
            frontend technologies. I specialize in transforming ideas into
            beautifully designed, high-performance web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold ">12+</span>
              <span className="">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold ">46+</span>
              <span className="">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold ">20+</span>
              <span className="">Worldwide Clients</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
