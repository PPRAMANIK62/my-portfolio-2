"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "purbayanpramanik62@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "https://linkedin.com/in/ppramanik6",
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    description: "https://x.com/PPramanik13941",
  },
];

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" py-6"
    >
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className=" xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>

          {/* info */}
          <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className=" flex flex-col gap-10">
              {info.map((item, i) => (
                <li key={i} className=" flex items-center gap-6">
                  <div className=" w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className=" text-[28px]">{item.icon}</div>
                  </div>

                  <div className=" flex-1">
                    <p className=" text-white/60">{item.title}</p>

                    {item.description.startsWith("https") ? (
                      <Link href={item.description} className=" xl:text-xl hover:border-b hover:border-accent hover:text-accent" target="_blank">{item.description.slice(8)}</Link>
                    ) : (
                      <h3 className=" xl:text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
