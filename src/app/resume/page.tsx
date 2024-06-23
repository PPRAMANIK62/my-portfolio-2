"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Purbayan Pramanik",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "purbayanpramanik62@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experience",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      company: "TechHuts",
      position: "Full Stack Developer",
      date: "2024 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Experience",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "National Institute of Technology, Durgapur",
      degree: "Bachelor of Technology",
      date: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "Experience",
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <FaGithub />,
      name: "git and github",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className=" min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className=" w-full">
              experience
            </TabsContent>

            {/* experience */}
            <TabsContent value="education" className=" w-full">
              education
            </TabsContent>

            {/* experience */}
            <TabsContent value="skills" className=" w-full">
              skills
            </TabsContent>

            {/* experience */}
            <TabsContent value="about" className=" w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
