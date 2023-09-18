import React from "react";
import { data } from "../data/data.js";

const Projects = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="work"
      className="w-full md:h-screen text-black bg-[#FFFFFF] my-10"
    >
      <div className="max-w-[900px] mx-auto flex overflow-hidden flex-col p-4 justify-center">
        <div>
          <p className="md:text-5xl text-3xl font-bold inline border-b-4 border-[#6fc2b0]">
            Work
          </p>
          <p className="py-6 text-md font-semi-bold">
            Check out some of my projects.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#313131] group container flex justify-center text-center items-center mx-auto z-10 content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
