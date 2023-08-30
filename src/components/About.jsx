import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[900px] w-full grid grid-cols-2 gap-8">
          <div className="text-left py-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#6fc2b0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-1 gap-8 px-4">
          <div className="text-left text-2xl sm:text-lg font-bold">
            <p>
              Hi. I'm Jacob Bringaze, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Passionate Front End Developer with a keen eye for design and a
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
