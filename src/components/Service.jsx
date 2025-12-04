import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
const data = [
  {
    id: 1,
    title: "security",
    delay: 0.4,
    link: "#",
    desc: "some random text about this product",
    image: "https://headphone-tcj.netlify.app/assets/obj1-BdlHnJ-o.png",
  },
  {
    id: 2,
    title: "Gurantee",
    delay: 0.8,
    link: "#",
    desc: "some random text about this product",
    image: "https://headphone-tcj.netlify.app/assets/obj2-BKIKMxxW.png",
  },
  {
    id: 3,
    title: "Affordability",
    delay: 0.8,
    link: "#",
    desc: "some random text about this product",
    image: "https://headphone-tcj.netlify.app/assets/obj3-BYxqyNvR.png",
  },
];
const Service = () => {
  const up = (delay) => {
    return {
      hidden: {
        opacity: 0,
        y: 100,
        scale: 0.5,
      },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
      exit: {
        opacity: 0,
        y: 100,
        scale: 0.5,
        transition: { duration: 0.5 },
      },
    };
  };
  return (
    <section className="bg-gray-100 poppins py-10">
      <div className="container py-16">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView="animate"
          className="text-3xl  font-bold text-center"
        >
          Services
        </motion.h1>
        <div className="grid  grid-cols-1 sm:grid-cols-3 ">
          {data.map((e) => {
            return (
              <UpdateFollower
                key={e.id}
                mouseOptions={{
                  scale: 5,
                  backgroundColor: "white",
                  rotate: -720,
                  delay: 2,
                  backgroundElement: (
                    <div>
                      <img src={e.image}></img>
                    </div>
                  ),
                }}
              >
                <motion.div
                  variants={up(e.delay)}
                  initial="hidden"
                  whileInView="show"
                  key={e.id}
                  className="flex flex-col items-center justify-center max-w-[300px] mx-auto shadow-lg py-10 text-center rounded-2xl"
                >
                  <img className="w-[100px] mb-4" src={e.image}></img>
                  <div>
                    <h1 className="text-2xl font-bold">{e.title}</h1>
                    <p className="text-center text-sm text-black/75">
                      {e.desc}
                    </p>
                  </div>
                </motion.div>
              </UpdateFollower>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
