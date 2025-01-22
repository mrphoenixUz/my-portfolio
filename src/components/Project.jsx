import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1-quiz.png";
import project2 from "../assets/images/project-2-todo.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Quiz app to test your knowledge",
      github_link: "https://github.com/mrphoenixUz/quiz-app",
      live_link: "https://quiz.mrphoenix.vip",
    },
    {
      img: project2,
      name: "Simple todo app",
      github_link: "https://github.com/mrphoenixUz/todo-pro",
      live_link: "https://todo-pro-ever-made.netlify.app",
    },
    // {
    //   img: project3,
    //   name: "",
    //   github_link: "",
    //   live_link: "",
    // },
    // {
    //   img: project4,
    //   name: "",
    //   github_link: "",
    //   live_link: "",
    // },
  ];
  return (
    <section id="projects" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-[#15ff00]">Projects</span>
        </h3>
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
                <div className="h-fit w-full p-4 bg-gray-800 hover:bg-gray-900 transition ease-in-out rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg w-80 h-44 object-cover" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-[#15ff00] bg-[#082f06] hover:bg-green-900 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-[#15ff00] bg-[#082f06] hover:bg-green-900 px-2 py-1 inline-block"
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
