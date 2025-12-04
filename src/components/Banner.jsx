import React from "react";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const Banner = () => {
  const up = (delay) => ({
    hidden: {
      opacity: 0,

      rotate: -10,
    },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section>
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 place-items-center md:space-y-0 gap-12">
        <div>
          <motion.img
            variants={up(0.5)}
            initial="hidden"
            whileInView="show"
            className="w-[300px] md:w-[400px]"
            src="https://headphone-tcj.netlify.app/assets/headphone4-B1oaMbaZ.png"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl lg:text-4xl font-semibold poppins"
            >
              The Latest Headphones With The Latest Technology
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </motion.p>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                scale: 5,
                zIndex: 999,
                mixBlendMode: "difference",
              }}
            >
              <motion.button
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white hover:cursor-pointer  "
              >
                Shop Now :p
              </motion.button>
            </UpdateFollower>
          </div>
        </div>
      </div>
      <section className="py-12  text-center varela">
        <div className="container">
          <div className="bg-gradient-to-t from-[#aa6d6b] to-[#aa6d6b]/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl">
            <UpdateFollower
              mouseOptions={{
                zIndex: 999,
                scale: 10,
                backgroundColor: "black",
                mixBlendMode: "screen",
              }}
            >
              <p className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">
                Headphones With Good Quality And Affordable Price
              </p>
            </UpdateFollower>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
