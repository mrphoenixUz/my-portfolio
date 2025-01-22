import React from "react";
import hero from "../assets/images/hero.png";
import me from "../assets/images/me.png";
import ParticlesBg from "./ParticlesBg";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-20 xl:flex-row flex-col items-center mx-auto px-40 container gap-10"
    >
      <ParticlesBg />
      <div className="items-center justify-center h-[350px] w-[350px] rounded-full border-[#15ff00] border-8 overflow-hidden">
        <img src={hero} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-black dark:text-white font-bold">
            <span className="text-[#15ff00] md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Karimov Muhammadyahyo</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#006500]">
            Fullstack Developer
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
