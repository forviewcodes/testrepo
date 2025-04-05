"use client";
import ContactForm from "@/components/ContactForm";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div ref={ref} className="pb-8">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold pb-8">
          <span className="bg-gradient-to-br from-[rgb(249,115,22)] to-[#EAB308] bg-clip-text text-transparent">
            Let’s Connect <br /> and Collaborate!
          </span>
        </h1>
        <ContactForm />
      </motion.div>
    </div>
  );
}
