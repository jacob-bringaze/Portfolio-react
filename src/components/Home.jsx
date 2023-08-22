import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import Bg from "../assets/bg1.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-cover bg-center bg-[#0a192f]"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] lg:mx-40 md:mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Jacob Bringaze
        </h1>
        <div className="md:text-6xl text-3xl font-bold text-[#bbbcbd]">
          <Typed
            className="md:text-6xl text-3xl font-bold text-[#6fc2b0]"
            strings={["Front End Developer."]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </div>
        <p className="text-white py-4 max-w-[700px]">
          I’m a Front End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white border-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
