import { AnimatePresence, easeInOut, m, motion } from "framer-motion";
import React, { useState } from "react";
import { UpdateFollower } from "react-mouse-follower";

const Hero = () => {
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
          ease: easeInOut,
        },
      },
      exit: {
        opacity: 0,
        y: 100,
        scale: 0.5,
        transition: { duration: 0.5, ease: easeInOut },
      },
    };
  };
  const headPhoneData = [
    {
      id: 1,
      image: "https://headphone-tcj.netlify.app/assets/headphone-CY2fcZLy.png",
      title: "Headphones Wireless",
      subtitle:
        "some random text about the headphone that is used to say some story",
      price: "$100",
      model: "Model Brown",
      bgColor: "#8b5958",
    },
    {
      id: 2,
      image: "https://headphone-tcj.netlify.app/assets/headphone2-DHQ3ooWG.png",
      title: "Headphones Wireless 2",
      subtitle:
        "some random text about the headphone that is used to say some story",
      price: "$100",
      model: "Lime Green",
      bgColor: "#638153",
    },
    {
      id: 3,
      image: "https://headphone-tcj.netlify.app/assets/headphone3-C5p0CIOf.png",
      title: "Headphones Wireless 3",
      subtitle:
        "some random text about the headphone that is used to say some story",
      price: "$100",
      model: "Ocean Blue",
      bgColor: "#0077BE",
    },
  ];
  const [data, setData] = useState(headPhoneData[0]);
  const handleData = (d) => {
    setData(d);
  };
  return (
    <>
      <section className="brandDark text-white varela">
        <div className="container grid grid-cols-1  md:grid-cols-2 min-h-[800px] ">
          {/* brand info */}
          <div className="flex text-white  flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,
                  mixBlendMode: "difference",
                  scale: 10,
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={data.id}
                    variants={up(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold varela"
                  >
                    {data.title}
                  </motion.h1>
                </AnimatePresence>
              </UpdateFollower>
              <AnimatePresence mode="wait">
                <motion.p
                  key={data.id}
                  variants={up(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80 "
                >
                  {" "}
                  {data.subtitle}
                </motion.p>
              </AnimatePresence>

              <UpdateFollower
                mouseOptions={{
                  scale: 6,
                  zIndex: 9999,
                  followSpeed: 0.5,
                  rotate: -720,

                  backgroundColor: data.bgColor,
                  backgroundElement: (
                    <div>
                      <img src={data.image}></img>
                    </div>
                  ),
                }}
              >
                <AnimatePresence>
                  <motion.button
                    key={data.id}
                    variants={up(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ backgroundColor: data.bgColor }}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                  >
                    Buy and Listen :{")"}
                  </motion.button>
                </AnimatePresence>
              </UpdateFollower>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-24!">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Headphones</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              <div className="grid grid-cols-3 gap-10">
                {headPhoneData.map((e) => {
                  return (
                    <UpdateFollower
                      mouseOptions={{
                        zIndex: 9999,
                        backgroundColor: e.bgColor,
                        scale: 6,

                        text: "View Details",
                        textFontSize: "3px",
                      }}
                    >
                      <div
                        onClick={() => handleData(e)}
                        className="grid grid-cols-2 place-items-center cursor-pointer gap-x-5 "
                      >
                        <div>
                          <img className="w-[200px] " src={e.image}></img>
                        </div>
                        <div className="space-y-1 ">
                          <p className="text-md font-bold ">{e.price}</p>
                          <p className="text-xs font-normal text-nowrap">
                            {e.model}
                          </p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={data.id}
                initial={{ scale: 0.9, y: 10, opacity: 0 }}
                animate={{
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.3 },
                }}
                exit={{
                  scale: 0.9,
                  y: 10,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0.3,
                  },
                }}
                src={data.image}
                className="w-[300px] md:w-[500px] xl:[600px]"
              ></motion.img>
            </AnimatePresence>
          </div>
          {/* Whatsapp icon */}
        </div>
      </section>
    </>
  );
};

export default Hero;
