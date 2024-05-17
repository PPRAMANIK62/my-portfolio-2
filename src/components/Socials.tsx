import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  { icon: <Github />, path: "https://github.com/PPRAMANIK62" },
  { icon: <Linkedin />, path: "https://www.linkedin.com/in/ppramanik6" },
  { icon: <Twitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
