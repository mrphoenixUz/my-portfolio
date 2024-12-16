import React from "react";

const Contact = () => {
  const social_media = [
    { key: 1, link: "https://instagram.com/mrphoenixuz", icon: "fa-brands fa-instagram" },
    { key: 2, link: "https://t.me/Fenix_Qaqnus", icon: "fa-brands fa-telegram" },
    { key: 3, link: "https://www.linkedin.com/in/karimov-muhammadyahyo-60b2a3315/", icon: "fa-brands fa-linkedin" },
    { key: 4, link: "https://github.com/mrphoenixUz", icon: "fa-brands fa-github" }
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8 px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Contact <span className="text-[#15ff00]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-base md:text-lg">Get in touch</p>

        <div className="mt-8 text-3xl sm:text-4xl md:text-5xl flex flex-wrap justify-center gap-3 md:gap-5">
          {social_media?.map((media) => (
            <div
              key={media.key}
              className="text-[#15ff00] hover:text-white cursor-pointer"
            >
              <a href={media.link} target="_blank">
                <i className={media.icon}></i>
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Contact;
