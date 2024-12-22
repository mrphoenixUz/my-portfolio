import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_xkrvao6";
    const TEMPLATE_ID = "template_yua5v7n";
    const PUBLIC_KEY = "QZbyfjrn-v0bsEJdJ";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus("Failed to send the message. Please try again.");
        console.error("Error sending email:", error);
      });
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
         gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex text-black flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-950 outline-none rounded-lg py-1 px-2 placeholder:text-[#15ff00] text-[#15ff00]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-950 outline-none rounded-lg py-1 px-2 placeholder:text-[#15ff00] text-[#15ff00]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-950 outline-none rounded-lg py-1 px-2 placeholder:text-[#15ff00] text-[#15ff00]"
            ></textarea>
            <button className="btn-primary w-fit" type="submit">
              Send Message
            </button>
            {status && <p className="text-[#15ff00]">{status}</p>}
          </form>
        </div>
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
