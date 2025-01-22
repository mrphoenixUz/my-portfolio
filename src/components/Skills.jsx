import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "fa-brands fa-html5",
      level: "HTML5",
    },
    // {
    //   logo: "fa-brands fa-css3-alt",
    //   level: "CSS3",
    // },
    {
      logo: "fa-brands fa-react",
      level: "ReactJS",
    },
    {
      logo: "fa-brands fa-node-js",
      level: "NodeJS",
    },
    {
      logo: "fa-brands fa-js",
      level: "JavaScript",
    },
    // {
    //   logo: "fa-solid fa-database",
    //   level: "Databases",
    // },
  ];
  return (
    <section id="skills" className="py-10 px-3 relative">
      <div className="text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-[#15ff00]">Skills</span>
        </h3>
        <div className="flex items-center justify-center max-w-6xl mt-12 mx-auto gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
            >
              <div
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 hover:bg-[#006500] transition-all rounded-full flex items-center justify-center group-hover:text-[#15ff00]">
                  <i className={skill.logo}></i>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
