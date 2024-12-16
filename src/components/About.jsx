import React from "react";
import aboutImg from "../assets/images/about-me.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "02" },
    { text: "Companies Work", count: "03" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#15ff00]">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                My name is Karimov Muhammadyahyo. I completed the Fullstack course at Najot Ta'lim and am currently a 2nd-year student at the Fergana branch of TUIT. I'm 20 years old and passionate about programming, chess, games, and more. I'm always eager to learn new technologies and improve my skills.
              </p>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-[#15ff00]">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a className="flex justify-center" href="./src/assets/cv.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-[#006500] rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
