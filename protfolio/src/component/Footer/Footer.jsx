import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/nameLogo.png"; // Update the path to your logo file

const Footer = () => {
  return (
    <footer className="text-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
            <img src={logo} alt="Logo" className="w-14 h-14 mb-2" />
            <h2 className="text-2xl font-bold">Yeasin Miah</h2>
            <p>Web Developer | Designer</p>
          </div>
          <div className="flex space-x-6 mb-6 lg:mb-0">
            <a
              href="https://www.facebook.com/ysm.yasin.5"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yeasin-miah-198b5829a/"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-200 hover:text-designColor transition transform hover:scale-x-125 duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="text-center lg:text-right">
            <p className="mb-2">Contact me:</p>
            <p>Email: yeasinmiah1272001@gmail.com</p>
            <p>Phone: 01910-255376</p>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} Yeasin Miah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
