import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import Bg from "../assets/bg23.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-cover bg-center bg-[#000000]"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] lg:mx-40 md:mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Jacob Bringaze
        </h1>
        <div className="md:text-5xl text-3xl font-bold text-[#bbbcbd]">
          <Typed
            className="md:text-5xl text-3xl z-40 font-bold text-[#48bcd1]"
            strings={["Software Developer."]}
            typeSpeed={120}
            backSpeed={80}
            loop
          />
        </div>
        <p className="text-white font-semibold py-4 max-w-[700px]">
          Software Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, focused on
          building responsive full-stack web applications.
        </p>
        <Link to="work" smooth={true} duration={500} className="w-[175px]">
          <button className="text-white border-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#48bcd1] hover:border-[#48bcd1] hover:text-white">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
