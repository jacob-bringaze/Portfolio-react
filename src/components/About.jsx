import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import Resume from "../assets/Jacob-Bringaze-Resume.pdf";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#FFFFFF] text-black">
      <div className="flex flex-col justify-center items-center my-10 md:mt-20 h-full w-full">
        <div className="max-w-[900px] w-full">
          <div className="text-left py-4 pl-4">
            <p className="md:text-5xl text-3xl font-bold inline border-b-4 border-[#6fc2b0]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 px-4">
          <div className="text-left sm:text-xl md:text-xl font-bold md:max-w-[400px] max-w-[350px] self-center">
            <p>
              Hi, I'm Jacob Bringaze, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div className="md:col-start-1">
            <GrPersonalComputer size={30} />
            <p className="font-bold uppercase my-2">experience</p>
            <p className="">2 + years</p>
          </div>
          <div className="md:col-start-1 md:row-start-3 row-start-4">
            <a
              className="text-black w-[200px] uppercase border-black group border-2 px-12 py-3 my-2 grid justify-items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0] hover:text-white"
              href={Resume}
              target="blank"
              download
            >
              Resume
            </a>
          </div>
          <div className="md:text-md md:max-w-[500px] max-w-[700px] font-normal text-md md:row-span-4 md:row-start-1 self-center">
            <p>
              Passionate Software Developer with a keen eye for design and a
              deep appreciation for crafting seamless user experiences. With a
              solid foundation in web development and a specialization in front
              end technologies, I thrive on bringing designs to life and
              creating dynamic, user-friendly interfaces. My journey began with
              a strong curiosity for the intersection of creativity and
              technology, leading me to master tools like HTML, CSS, and
              JavaScript. My expertise extends to React, where I harness the
              power of components and state management to build interactive and
              efficient web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
