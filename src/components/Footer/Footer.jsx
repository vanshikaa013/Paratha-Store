import React, { useContext } from "react";
import { FaLinkedinIn, FaGithub  } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../../assets/logoo.png"
import ThemeContext from "../Theme/ThemeContext";

const Footer = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <footer className={dark ? "bg-gray-500 text-black py-10 px-10": "bg-gray-800 text-white py-10 px-10"}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        
        
        <div className="mb-6 md:mb-0">
           <span className="flex items-center ">
           <img className="w-[5%]" src={logo} alt="" />
           <h2 className="text-2xl font-bold">Desi Dough</h2>
           </span>
          <p className={dark ? "text-black-400 mt-2 w-[60%]":"text-gray-400 mt-2 w-[60%]"}>
            Serving the finest hand-rolled parathas, made with love and the freshest ingredients. Taste the tradition!
          </p>
        </div>

        {/* Navigation Links */}
        <div className={dark ? "flex flex-col md:flex-row gap-5 md:gap-10 text-black-400" :"flex flex-col md:flex-row gap-5 md:gap-10 text-gray-400"}>
          <a href="/" className="hover:text-white">About Us</a>
          <a href="#Menu" className="hover:text-white">Menu</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-6 md:mt-0 text-xl">
          <a target="blank" href="https://www.linkedin.com/in/vanshika-upadhyay-06abb827b/" className={dark ? "text-black-400 hover:text-white" : "text-gray-400 hover:text-white"}>
          <FaLinkedinIn />
          </a>
          <a href="https://github.com/vanshikaa013" target="blank">
          <FaGithub />
          </a>
          <a href="https://www.youtube.com/" target="blank">
          <FiYoutube />
          </a>
        </div>
      </div>
      <div className={dark ? "mt-8 text-center text-black-500 text-sm" :"mt-8 text-center text-gray-500 text-sm"}>
        <p>&copy; {new Date().getFullYear()} Desi Dough. All rights reserved.</p>
        <p>Designed with ❤️ by Desi Dough</p>
      </div>
    </footer>
  );
};
export default Footer;