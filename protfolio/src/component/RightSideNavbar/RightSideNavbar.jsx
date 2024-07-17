import React from "react";
import { motion } from "framer-motion";

const RightSideNavbar = () => {
  const initialAnimation = {
    opacity: 0,
    x: 20,
  };

  const animate = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  };

  return (
    <div className="fixed top-0 -right-24 mt-80 transform rotate-90 z-30 hidden md:block">
      <motion.a
        href="mailto:yeasinmiah1272001@gmail.com"
        className="block text-designColor py-2 px-4 rounded-lg"
        initial={initialAnimation}
        animate={animate}
      >
        <p className="text-sm tracking-widest">yeasinmiah1272001@gmail.com</p>
      </motion.a>
    </div>
  );
};

export default RightSideNavbar;
