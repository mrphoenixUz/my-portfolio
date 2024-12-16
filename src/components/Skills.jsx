import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "fa-brands fa-html5",
      level: "HTML5",
      count: 76,
    },
    {
      logo: "fa-brands fa-css3-alt",
      level: "CSS3",
      count: 70,
    },
    {
      logo: "fa-brands fa-react",
      level: "ReactJS",
      count: 60,
    },
    {
      logo: "fa-brands fa-node-js",
      level: "NodeJS",
      count: 80,
    },
    {
      logo: "fa-brands fa-js",
      level: "JavaScript",
      count: 91,
    },
    {
      logo: "fa-solid fa-database",
      level: "Databases",
      count: 88,
    },
  ];
  return (
    <section id="skills" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#15ff00]">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center max-w-6xl mt-12 mx-auto gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-[#15ff00] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(#15ff00 ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-[#15ff00]">
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
