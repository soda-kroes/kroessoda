"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";


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
    name: "School Management System",
    description:
      "The system allows administrators to manage student records, including personal details, contact information, enrollment information, and academic history. ",
    link: "/",
    github: "https://github.com/soda-kroes/Scholl_Mangement",
  },

  {
    image: "/work/javaFullStack.png",
    category: "Java(Fullstack)",
    name: "School Register Online",
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

//remove category duplicate
//   console.log(ProjectData.map((item)=>item.category));
const uniqueCategories = [
  "all projects",
  ...new Set(ProjectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = ProjectData.filter((project) => {
    if (category === "all projects") {
      return true;
    }
    return project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto dark:text-white">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full h-full grid xl:grid-cols-4 lg:max-w-[640px] mx-auto md:border dark:border-none">
            {categories.map((cat, index) => (
              <TabsTrigger
                onClick={() => setCategory(cat)}
                className="capitalize w-[162px] md:w-auto mb-3"
                key={index}
                value={cat}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
