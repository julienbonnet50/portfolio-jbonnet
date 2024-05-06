"use client";

import Image from "next/image";
import React from "react";

import info from "../info";
import font from "../font"
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Avatar from "../app/components/Avatar"
import Contact from  "../app/components/Contact"
import Project from "../app/components/Projects"
import Path from "../app/components/Path"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Navbar />

      <Avatar />      
      
      <Path></Path>

      <h2
          id="Projects"
          className={`${font.pathTitleFontSize} font-bold flex justify-center my-4`}
        >
          Featured Projects
        </h2>
        <div className={`${font.pathSubTitleFontSize} flex justify-center mx-12 mb-[70px]`}>
          <p>
            Here's all project I'm currently working on.
          </p>
        </div>

        {info.featuredProjects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            github={project.github}
            link={project.link}
            image={project.image}
            summary={project.summary}
            technologies={project.technologies}
            index={index}
          />
        ))}

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <Contact></Contact>
      
      <Footer></Footer>
    </main>
  );
}
