import React from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { BsMeta, BsFillDatabaseFill } from "react-icons/bs";
import Resume from "../assets/Jacob-Bringaze-Resume-10.pdf";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#FFFFFF] text-black">
      <div className="flex flex-col justify-center items-center my-10 md:mt-20 h-full w-full">
        <div className="max-w-[900px] w-full">
          <div className="text-left py-4 pl-4">
            <p className="md:text-5xl text-3xl font-bold inline border-b-4 border-[#48bcd1]">
              About
            </p>
          </div>
        </div>
        <div className="md:max-w-[900px] w-full grid md:grid-cols-[1fr_1fr_1fr_4fr] grid-cols-3 grid-rows-[1fr_1fr_3fr_1fr] md:grid-rows-3 md:gap-x-5 md:gap-y-4 px-4">
          <div className="text-left sm:text-xl md:text-xl row-start-1 col-span-3 font-bold md:max-w-[400px] self-center">
            <p>Hi, nice to meet you. Please take a look around.</p>
          </div>
          <div className="md:col-start-1 md:row-start-2 col-start-1 row-start-2 self-center">
            <GrPersonalComputer size={30} />
            <p className="font-bold uppercase my-2 text-xs">Front-End</p>
          </div>
          <div className="md:col-start-2 md:row-start-2 text-xs self-center col-start-2 row-start-2">
            <BsFillDatabaseFill size={30} />
            <p className="font-bold uppercase my-2">Back-End</p>
          </div>
          <div className="md:col-start-3 hover:text-[#48bcd1] md:row-start-2 text-xs self-center row-start-2 col-start-3">
            <BsMeta size={30} />
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/PDSBV5894D3H"
              target="blank"
            >
              <p className="font-bold uppercase my-2">meta developer</p>
            </a>
          </div>
          <div className="md:col-span-3 md:row-start-3 row-start-4 self-center">
            <a
              className="hover:text-black w-[200px] hover:bg-transparent uppercase hover:border-black group border-2 px-12 py-3 my-2 grid justify-items-center bg-[#48bcd1] border-[#48bcd1] text-white"
              href={Resume}
              target="blank"
              download
            >
              Resume
            </a>
          </div>
          <div className="md:text-md md:max-w-[500px] md:pl-10 max-w-[700px] row-start-3 col-span-3 font-normal md:col-start-4 text-md md:row-span-4 md:row-start-1 self-center">
            <p>
              Passionate Software Developer with a keen eye for design and a
              deep appreciation for crafting seamless user experiences. With a
              solid foundation in web development and a specialization in front
              end technologies, thriving on bringing designs to life and
              creating dynamic, user-friendly interfaces. My journey began with
              a strong curiosity for the intersection of creativity and
              technology, leading me to master tools like HTML, CSS, and
              JavaScript. Expertise extends to React, where power of components
              and state management is harnessed to build interactive and
              efficient web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
