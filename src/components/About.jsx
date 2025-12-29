import React from "react";
import cv from "../assets/cv.pdf";

const About = () => {
  return (
    <section id="about" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#15ff00]">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 justify-center my-3">
              <p className="text-justify text-2xl leading-7 w-11/12 mx-auto">
                My name is Karimov Muhammadyahyo. I am Fullstack developer. Now
                learning new technologies and always improving my skills.
              </p>
              <br />
              <a className="flex justify-center" href={cv} download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
