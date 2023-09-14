import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github-blue.jpg";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#FFFFFF] text-black">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-[#6fc2b0]">
            Skills
          </p>
          <p className="py-4 text-lg font-bold">
            These are the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#777791] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
