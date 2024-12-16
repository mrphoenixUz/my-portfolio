import React from "react";
import hireMe from "../assets/images/legend.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-[#15ff00]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="justify-center text-center relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-2 flex gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="text-justify max-w-4xl text-[15px] mt-4 text-gray-200 leading-8">
            <i className="fa-solid fa-check"></i>&nbsp; Boost productivity by automating processes and creating custom tools tailored to your business needs. <br />
            <i className="fa-solid fa-check"></i>&nbsp; Increase revenue through high-quality, responsive web applications that enhance customer experience. <br />
            <i className="fa-solid fa-check"></i>&nbsp; Save costs by optimizing code and implementing robust systems that reduce maintenance and downtime. <br />
            <i className="fa-solid fa-check"></i>&nbsp; Improve team efficiency with clear, maintainable, and well-documented code. <br />
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
