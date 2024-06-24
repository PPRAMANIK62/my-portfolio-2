import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  {
    icon: <FaGithub className="h-5 w-5" />,
    path: "https://github.com/PPRAMANIK62",
  },
  {
    icon: <FaLinkedin className="h-5 w-5" />,
    path: "https://linkedin.com/in/ppramanik6",
  },
  {
    icon: <FaTwitter className="h-5 w-5" />,
    path: "https://x.com/PPramanik13941",
  },
];

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
