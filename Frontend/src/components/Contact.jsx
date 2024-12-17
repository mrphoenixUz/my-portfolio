import React, { useState } from "react";

const Contact = () => {
  const social_media = [
    { key: 1, link: "https://instagram.com/mrphoenixuz", icon: "fa-brands fa-instagram" },
    { key: 2, link: "https://t.me/Fenix_Qaqnus", icon: "fa-brands fa-telegram" },
    { key: 3, link: "https://www.linkedin.com/in/karimov-muhammadyahyo-60b2a3315/", icon: "fa-brands fa-linkedin" },
    { key: 4, link: "https://github.com/mrphoenixUz", icon: "fa-brands fa-github" }
  ];
  const contact_info = [
    { logo: "mail", text: "karimovmoff@gmail.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "demo location",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8 px-4 md:px-8">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Contact <span className="text-[#15ff00]">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-base md:text-lg">Get in touch</p>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex text-black flex-col flex-1 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn-primary w-fit" type="submit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-8 text-3xl sm:text-4xl md:text-5xl flex flex-wrap justify-center gap-3 md:gap-5">
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
        </div> */}
      </div>

    </section>
  );
};

export default Contact;
