import React, { useState } from "react";

import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center ma-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className=" font-mono text-gray-300 text-[25px] cursor-pointer font-bold animate-pulse">
            Raza Khan
          </p>
        </Link>
        <div className="flex gap-4">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="list-none hidden sm:flex justify-between w-12 mt-1 text-[#915EFF] animate-pulse cursor-pointer z-50">
            <SocialLinks />
          </div>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className=" flex gap-5 text-[#915EFF] animate-pulse cursor-pointer">
                <SocialLinks />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SocialLinks = () => (
  <>
    <BsGithub
      onClick={() =>
        window.open("https://github.com/razakhan05?tab=repositories", "_blank")
      }
    />
    <BsLinkedin
      onClick={() =>
        window.open(
          "https://www.linkedin.com/in/raza-khan-109262247/",
          "_blank"
        )
      }
    />
  </>
);
export default Navbar;
