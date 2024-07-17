import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.3 },
  };

  const initialAnimation = {
    opacity: 0,
    y: -20,
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };

  const icons = [
    {
      icon: FaGithub,
      link: "https://github.com/yeasinmiah1272001?tab=repositories",
    },
    { icon: FaFacebook, link: "https://www.facebook.com/ysm.yasin.5" },
    { icon: FaYoutube, link: "/" },
    { icon: FaLinkedin, link: "/" },
    { icon: FaInstagram, link: "/" },
  ];

  return (
    <div className="fixed hidden md:block mt-16">
      <ul className="m-8 space-y-8">
        {icons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <li key={index}>
              <motion.div
                initial={initialAnimation}
                animate={{
                  ...animate,
                  transition: { delay: index * 0.2, duration: 0.5 },
                }}
                whileHover={hoverAnimation}
              >
                <Link to={item.link} className="hover:text-designColor">
                  <IconComponent className="w-8 h-10 rounded-full" />
                </Link>
              </motion.div>
             
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideNavbar;
