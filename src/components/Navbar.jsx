import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLightMode = useSelector((state) => state.theme.isLightMode);

  // Effect to update the body class when the theme changes
  useEffect(() => {
    document.body.className = isLightMode ? 'light' : 'dark';
  }, [isLightMode]);

  const [sticky, setSticky] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-[#d1ffcd]/40  text-gray-900" : ""
      }`}
    >
      <div className="flex items-center px-3 container mx-auto justify-between">
        <div className="">
          <h4 className="text-4xl m-4 uppercase text-[#15ff00] font-bold">
            Karimov
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 " : ""
          } text-white md:block hidden py-2 font-medium  rounded-bl-full`}
        >
          {/* <button
            onClick={() => dispatch(toggleTheme())}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          </button> */}
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className={`px-6 hover:text-[#15ff00] ${
                  sticky ? "text-gray-900" : "text-white"
                }`}
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
