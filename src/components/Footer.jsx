import React from "react";
import {
  FaEbay,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  const image = [
    "https://headphone-tcj.netlify.app/assets/credit-cards-JstMMRFE.webp",
  ];

  const animateUp = (delay) => ({
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay, ease: "easeInOut" },
    },
  });

  return (
    <>
      <footer className="bg-[#aa6d6b] pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={animateUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="space-y-5"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
                ratione quidem libero, praesentium ab atque? Quidem maxime,
                numquam dolores
              </p>
              <div className="flex items-center gap-3">
                <FaPhoneAlt /> <p>+1 (123) 456-7890 </p>
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <FaMapMarkedAlt></FaMapMarkedAlt> <p>Noida, Uttar Pradesh</p>
              </div>
            </motion.div>
            <motion.div
              variants={animateUp(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="space-y-5"
            >
              <h1 className="text-3xl font-bold uppercase ">Quick Links</h1>
              <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2">
                <li className="hover:cursor-pointer">Home</li>
                <li className="hover:cursor-pointer">About</li>
                <li className="hover:cursor-pointer">Contact</li>
                <li className="hover:cursor-pointer">Blogs</li> <li>Home</li>
                <li className="hover:cursor-pointer">About</li>
                <li className="hover:cursor-pointer">Contact</li>
                <li className="hover:cursor-pointer">Blogs</li>
              </ul>
            </motion.div>
            <motion.div
              variants={animateUp(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="space-y-7"
            >
              <h1 className="text-3xl font-bold uppercase">Follow Us</h1>
              <div className=" flex gap-10 mt-5 items-center justify-start  ">
                <FaFacebook className="hover:-translate-y-2 transition-all ease-in text-4xl md:text-5xl"></FaFacebook>
                <FaInstagram className="hover:-translate-y-2 transition-all ease-in text-4xl md:text-5xl"></FaInstagram>
                <FaTelegram className="hover:-translate-y-2 transition-all ease-in text-4xl md:text-5xl"></FaTelegram>

                <FaEbay className="hover:-translate-y-2 transition-all ease-in text-4xl md:text-5xl"></FaEbay>
              </div>
              <div>
                <h3 className="text-md">Payment Options</h3>
                <div className="flex">
                  {image.map((img, i) => {
                    return (
                      <div>
                        <img src={img}></img>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="container gap-2 flex items-center justify-center mt-2"
        >
          <div className="h-[1px] w-100 bg-white"></div>
          <h1>© 2025. All Rights Reserved || Aditya Sharan</h1>
          <div className="h-[1px] w-100 bg-white"></div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
