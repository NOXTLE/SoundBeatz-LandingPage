import React from "react";
import { IoMdMenu } from "react-icons/io";
import { SlEarphones } from "react-icons/sl";
import "../App.css";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "Categories",
      link: "#",
    },
    {
      id: 3,
      title: "Blog",
      link: "#",
    },
    {
      id: 4,
      title: "About",
      link: "#",
    },
    {
      id: 5,
      title: "Contact",
      link: "#",
    },
  ];
  return (
    <>
      <div className={"brandDark text-white py-4 varela"}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" container flex justify-between items-center"
        >
          <div>
            <a href="#" className={"text-xl font-bold uppercase"}>
              Sound/
              <span className={"font-extralight text-white/70"}>Beatz</span>
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {menuItems.map((i) => {
                return (
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 999,
                      followSpeed: 1.5,
                      scale: 5,
                      mixBlendMode: "difference",
                    }}
                  >
                    <li
                      key={i.id}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      <a className="poppins" href={i.link}>
                        {i.title}
                      </a>
                    </li>
                  </UpdateFollower>
                );
              })}
            </ul>
          </div>
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 999,
              followSpeed: 1.5,
              scale: 5,
              mixBlendMode: "difference",
            }}
          >
            <button className="text-xl ps-14">
              <SlEarphones />
            </button>
          </UpdateFollower>

          <div className="md:hidden">
            <IoMdMenu className="text-4xl" />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
