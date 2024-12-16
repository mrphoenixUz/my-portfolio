import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1-flags.png";
import project2 from "../assets/images/project-2-todo.png";
import project3 from "../assets/images/project-3-estore.png";
import project4 from "../assets/images/project-4-black.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Where in the world?",
      github_link: "https://github.com/mrphoenixUz/allflags-react",
      live_link: "https://allflags-react.vercel.app",
    },
    {
      img: project2,
      name: "Simple todo app",
      github_link: "https://github.com/mrphoenixUz/todo-pro",
      live_link: "https://todo-pro-ever-made.netlify.app",
    },
    {
      img: project3,
      name: "E-store",
      github_link: "https://github.com/mrphoenixUz/nornlight-estore",
      live_link: "https://nornlight-estore.vercel.app",
    },
    {
      img: project4,
      name: "Blank",
      github_link: "https://github.com/mrphoenixUz",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#15ff00]">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-gray-900 hover:bg-[#006500] transition ease-in-out rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-80 h-44 object-cover" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-[#15ff00] bg-[#082f06] px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-[#15ff00] bg-[#082f06] px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
