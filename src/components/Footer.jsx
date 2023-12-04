import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black flex justify-center items-center">
      <div className="my-5">
        <ul className="flex">
          <li>
            <a
              href="mailto:jbringazedev@gmail.com"
              className="text-gray-300 hover:text-[#48bcd1]"
            >
              <FaPaperPlane size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jacob-bringaze"
              className="text-gray-300 hover:text-[#48bcd1]"
              target="blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jacob-bringaze"
              className="text-gray-300 hover:text-[#48bcd1]"
              target="blank"
            >
              <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
