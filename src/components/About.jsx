import React from "react";
import aboutImg from "../assets/images/about-me.png";
const About = () => {
  return (
    <section id="about" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#15ff00]">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 justify-center my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                My name is Karimov Muhammadyahyo. I completed the Fullstack course at Najot Ta'lim and am currently a 2nd-year student at the Fergana branch of TUIT. I'm 20 years old and passionate about programming, chess, games, and more. I'm always eager to learn new technologies and improve my skills.
              </p>
              <br />
              <a className="flex justify-center" href="./src/assets/cv.pdf" download>
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
