"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// //import swripper react component
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import {Pagination } from 'swiper/modules';

//components
import ProjectCard from "./ProjectCard";
import { Notebook } from "lucide-react";

const ProjectData = [
  {
    image: "/work/react1.png",
    category: "React Js",
    name: "Zanya Cafe Website",
    description:
      "The Zanya Cafe website is a static website designed to showcase the products offered by the cafe.",
    link: "https://cosmic-squirrel-65d87e.netlify.app/",
    github: "https://github.com/soda-kroes/Zanya_Cafe",
  },
  
  {
    image: "/work/asp1.png",
    category: "ASP.Net",
    name: "Library Management System",
    description:
      "The purpose of a library management system is to manage work of the library such as borrow books, return books, etc.",
    link: "/",
    github: "https://github.com/soda-kroes/LMS-Csharp",
  },
  {
    image: "/work/nextjs1.png",
    category: "Next Js",
    name: "Portfolio Website",
    description:
      "The primary purpose of this website is to showcase and present information in an engaging and informative manner.",
    link: "/",
    github: "https://github.com/soda-kroes/PORTFOLIO",
  },


  {
    image: "/work/fullstack1.png",
    category: "Fullstack",
    name: "Ecommerce Website",
    description:
      "The ECM website is a full-stack web application built using technologies such as React.js and Node.js. ",
    link: "/",
    github: "https://github.com/soda-kroes/ECM_REACT",
  },

  {
    image: "/work/asp2.png",
    category: "ASP.Net",
    name: "Scholl Management System",
    description:
      "The system allows administrators to manage student records, including personal details, contact information, enrollment information, and academic history. ",
    link: "/",
    github: "https://github.com/soda-kroes/Scholl_Mangement",
  },

  {
    image: "/work/javaFullStack.png",
    category: "Java(Fullstack)",
    name: "Scholl Register Online",
    description:
      "The School Register Online system is a web-based application that allows users to submit their information for registering at a school and user can switch languages Khmer or English.",
    link: "/",
    github: "https://github.com/soda-kroes/RegisterOnline",
  },
  {
    image: "/work/cpp.png",
    category: "C++",
    name: "Student Management",
    description:
      "The system allow administrators to manage student records.",
    link: "/",
    github: "https://github.com/soda-kroes/CPP_Project",
  }
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center
                 xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4 dark:text-white">Lastest Projects</h2>
          <p className="subtitle mb-b text-base"> </p>
          It is all my project that I have completed.
          <div className="mt-10 text-base mb-4">😜😍 Please note that I do not have the ability to deploy all project to  browse the internet, But you can get my code from the GitHub</div>
         
          <Link href="/projects">
            <Button>All Project</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[800px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for slide */}
            {ProjectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Work;
