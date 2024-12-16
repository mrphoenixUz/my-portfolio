import React from "react";
import hireMe from "../assets/images/legend.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            <i className="fa-solid fa-check"></i> Boost productivity by automating processes and creating custom tools tailored to your business needs. <br />
            <i className="fa-solid fa-check"></i> Increase revenue through high-quality, responsive web applications that enhance customer experience. <br />
            <i className="fa-solid fa-check"></i> Save costs by optimizing code and implementing robust systems that reduce maintenance and downtime. <br />
            <i className="fa-solid fa-check"></i> Improve team efficiency with clear, maintainable, and well-documented code. <br />
            <i className="fa-solid fa-check"></i> And also I can save your company when it is even on the verge of collapse, like a superhero :{')'}
          </p>
          <button className="btn-primary mt-10">Say Hello</button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-0 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
