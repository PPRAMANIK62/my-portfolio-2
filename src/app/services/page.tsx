"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "1",
    title: "Full Stack Development",
    text: "Building complete web applications from front-end interfaces to back-end systems with modern technologies like React, Next.js, Node.js, and various databases.",
    href: "/contact-me",
  },
  {
    num: "2",
    title: "UI/UX Design",
    text: "Creating intuitive, responsive, and visually appealing user interfaces that provide exceptional user experiences across all devices and platforms.",
    href: "/contact-me",
  },
  {
    num: "3",
    title: "API Development",
    text: "Designing and implementing robust, scalable RESTful and GraphQL APIs that power modern web and mobile applications with efficient data handling.",
    href: "/contact-me",
  },
  {
    num: "4",
    title: "Database Architecture",
    text: "Designing optimized database schemas and implementing efficient data storage solutions using SQL and NoSQL databases like PostgreSQL, MongoDB, and more.",
    href: "/contact-me",
  },
];

const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <ArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {item.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{item.text}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default page;
