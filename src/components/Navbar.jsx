import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "../assets/Jacob-Bringaze-Resume-10.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full h-[80px] flex justify-between z-40 items-center px-4 bg-[#ffffff00] text-gray-300"
    >
      <div>
        <Link
          to="home"
          smooth={true}
          style={{ color: `${textColor}` }}
          className="uppercase font-bold text-2xl hover:cursor-pointer"
        >
          Jbringaze
        </Link>
      </div>

      <ul style={{ color: `${textColor}` }} className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-[#48bcd1] font-bold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-[#48bcd1] font-bold"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-[#48bcd1] font-bold"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-[#48bcd1] font-bold"
          >
            Work
          </Link>
        </li>
      </ul>

      <Link to="contact" smooth={true} duration={500} className="w-[175px]">
        <button className="hidden text-white font-bold group rounded-full px-6 py-3 my-2 md:flex items-center bg-[#48bcd1] hover:bg-[#09a8c4]">
          Contact Me
        </button>
      </Link>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? (
          <FaBars size={20} style={{ color: `${textColor}` }} />
        ) : (
          <FaTimes size={20} className="text-white" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-[100%] h-screen bg-[#000000ee] flex flex-col justify-center items-center"
        }
      >
        <li className="p-6 text-4xl hover:text-[#48bcd1]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-6 text-4xl hover:text-[#48bcd1]">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-6 text-4xl hover:text-[#48bcd1]">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-6 text-4xl hover:text-[#48bcd1]">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="p-6 text-4xl hover:text-[#48bcd1]">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jacob-bringaze"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jacob-bringaze"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#b94343]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jbringazedev@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
              target="blank"
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
