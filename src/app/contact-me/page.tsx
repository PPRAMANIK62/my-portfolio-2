"use client";

import ContactForm from "@/components/ContactForm";
import { Form } from "@/components/ui/form";
import { motion } from "framer-motion";
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
    description: "https://www.linkedin.com/in/ppramanik6",
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
          <div className=" xl:h-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>

          {/* info */}
          <div className=" flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
