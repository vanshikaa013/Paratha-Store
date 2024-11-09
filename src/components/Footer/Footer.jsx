import React, { useContext } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../../assets/logoo.png";
import ThemeContext from "../Theme/ThemeContext";

const Footer = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={dark ? "bg-gray-700 text-white py-10 px-5" : "bg-gray-800 text-white py-10 px-5"}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="flex items-center justify-center md:justify-start gap-2">
            <img className="w-[10%] md:w-[5%]" src={logo} alt="Logo" />
            <h2 className="text-2xl font-bold">Desi Dough</h2>
          </span>
          <p className={dark ? "text-black-400 mt-2 w-[100%] md:w-[60%]" : "text-gray-400 mt-2 w-[100%] md:w-[60%]"}>
            Serving the finest hand-rolled parathas, made with love and the freshest ingredients. Taste the tradition!
          </p>
        </div>

        {/* Footer Links */}
        <div className={dark ? "flex flex-col md:flex-row gap-5 md:gap-10 text-black-400" : "flex flex-col md:flex-row gap-5 md:gap-10 text-gray-400"}>
          <a href="/" className="hover:text-white">About Us</a>
          <a href="#Menu" className="hover:text-white">Menu</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0 text-xl justify-center md:justify-start">
          <a target="blank" href="https://www.linkedin.com/in/vanshika-upadhyay-06abb827b/" className={dark ? "text-black-400 hover:text-white" : "text-gray-400 hover:text-white"}>
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/vanshikaa013" target="blank" className={dark ? "text-black-400 hover:text-white" : "text-gray-400 hover:text-white"}>
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/" target="blank" className={dark ? "text-black-400 hover:text-white" : "text-gray-400 hover:text-white"}>
            <FiYoutube />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className={dark ? "mt-8 text-center text-black-500 text-sm" : "mt-8 text-center text-gray-500 text-sm"}>
        <p>&copy; {new Date().getFullYear()} Desi Dough. All rights reserved.</p>
        <p>Designed with ❤️ by Desi Dough</p>
      </div>
    </footer>
  );
};

export default Footer;
