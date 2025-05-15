"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I'm a passionate full stack developer with expertise in modern web technologies. I focus on creating scalable, high-performance applications with clean, maintainable code and intuitive user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Purbayan Pramanik",
    },
    {
      fieldName: "Email",
      fieldValue: "purbayanpramanik62@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
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
    "My professional journey in software development, where I've worked on various projects and technologies to build robust web applications.",
  items: [
    {
      company: "TechHuts",
      position: "Full Stack Developer",
      duration: "2024 - 2025",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "My academic background that has provided me with a strong foundation in computer science and software engineering principles.",
  items: [
    {
      institution: "NIT Durgapur",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "Skills",
  description:
    "The technologies and tools I've mastered throughout my development journey, enabling me to build comprehensive web solutions.",
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
      name: "git",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
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
          <div className=" min-h-[73vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className=" w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{experience.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className=" h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className=" text-accent">{item.duration}</span>
                        <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className=" flex items-center gap-3">
                          {/* dot */}
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className=" text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className=" w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className=" text-4xl font-bold">{education.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className=" h-[400px]">
                  <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => (
                      <li
                        key={i}
                        className=" bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className=" text-accent">{item.duration}</span>
                        <h3 className=" text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>

                        <div className=" flex items-center gap-3">
                          {/* dot */}
                          <span className=" w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className=" text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className=" w-full h-full">
              <div className=" flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className=" h-[520px]">
                  <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, i) => (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className=" w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className=" text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className=" capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className=" w-full text-center xl:text-left"
            >
              <div className=" flex flex-col gap-[30px]">
                <h3 className=" text-4xl font-bold">{about.title}</h3>
                <p className=" max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, i) => (
                    <li
                      key={i}
                      className=" flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className=" text-white/60">{item.fieldName}</span>
                      <span className=" text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
