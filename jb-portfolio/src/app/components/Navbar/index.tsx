import React, { useContext, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import info from "../../../info"

interface Props {}

const Navbar = (props: Props) => {
  const { scrollY }: any = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  const variants = {
    visible: { top: "0vh" },
    hidden: { top: "-20vh" },
  };

  useEffect(() => {
    return scrollY.on("change",() => update());

  });
  return (
    <motion.div
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.8 }}
      className="navbar fixed bg-base-100  z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {info.sections.map((section) => (
              <li key={section}>
                <a href={`#${section}`}>{section}</a>
              </li>
            ))}
            <li>
              <a target="_blank" href="/Julien_BONNET_Resume.pdf" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <a href="" className="btn btn-ghost text-base-content normal-case text-xl">
          {info.name}
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {info.sections.map((section) => (
            <li key={section}>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
          <li>
            <a target="_blank" href="/Julien_BONNET_Resume.pdf" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;