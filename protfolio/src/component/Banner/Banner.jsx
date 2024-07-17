import React from "react";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import LeftSideNavbar from "../LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";

const Banner = () => {
  const stringValue = ["I build things for the web", "Frontend Developer"];

  return (
    <div className="flex">
      <LeftSideNavbar></LeftSideNavbar>
      <Container
        id="Home"
        className="py-20 flex flex-col items-start text-lg lg:text-xl space-y-6"
      >
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-lg lg:text-2xl font-semibold text-designColor"
        >
          Hi, My name is
        </motion.h1>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-4xl lg:text-6xl font-bold leading-tight"
        >
          Yeasin Ahmed
          <span className="block text-3xl lg:text-4xl font-semibold text-designColor mt-2">
            <Typewriter
              options={{
                strings: stringValue,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="text-sm lg:text-base leading-relaxed"
        >
          I am a web developer with 1+ years of experience in React.  I have a
          strong foundation in <br /> front-end & back-end development and am
          skilled in creating user-friendly and <br /> responsive web  applications
          using <br /> React and its ecosystem.
        </motion.p>

        <motion.a
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-designColor border border-designColor px-6 py-2 rounded-md text-center items-center duration-300 hover:bg-slate-700"
        >
          Check out my projects
        </motion.a>
      </Container>
      <RightSideNavbar></RightSideNavbar>
    </div>
  );
};

export default Banner;
