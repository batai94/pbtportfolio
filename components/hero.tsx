"use client";

import Image from "next/image";
import React from "react";
import pbt from "../public/pbt.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={pbt}
              alt="pbt portrait"
              quality={80}
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mt-4 mb-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Tai.</span> I&apos;m a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy{" "}
        <span className="italic">designing & building</span> sites. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/PHAN-BA-TAI-Front-end-Web-Dev.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderLightBlack dark:bg-white/10"
        >
          Download CV{" "}
          <BsDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="group bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer borderLightBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin className="group-hover:scale-110 transition" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="group bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer borderLightBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub className="group-hover:scale-110 transition" />
        </a>
      </motion.div>
    </section>
  );
}
