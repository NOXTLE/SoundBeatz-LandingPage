import React from "react";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
const Blog = () => {
  const animateUp = (delay) => ({
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay, ease: "easeInOut" },
    },
  });

  const data = [
    {
      id: 1,
      image: "https://headphone-tcj.netlify.app/assets/blog1-COO03_v8.jpg",
      title: "Title of the Blog",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      delay: 0.2,
    },
    {
      id: 2,
      image: "https://headphone-tcj.netlify.app/assets/blog2-DXABjJKT.jpg",
      title: "Title of the Blog",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      delay: 0.4,
    },
    {
      id: 3,
      image: "https://headphone-tcj.netlify.app/assets/blog3-Bok-qOYs.jpg",
      title: "Title of the Blog",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      delay: 0.6,
    },
    {
      id: 4,
      image: "https://headphone-tcj.netlify.app/assets/blog4-DqioCLZL.jpg",
      title: "Title of the Blog",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      delay: 0.8,
    },
  ];
  return (
    <>
      <section className="brandDark text-white">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center poppins pb-8">Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.map((e) => {
              return (
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                    text: "read",
                    textFontSize: "3px",
                    scale: 5,
                  }}
                >
                  <motion.div
                    variants={animateUp(e.delay)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex rounded-2xl shadow flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg roudned-md bg-white hover:-translate-y-2 duration-300"
                  >
                    <img src={e.image}></img>
                    <div className="px-2 py-2">
                      <h1 className="text-xl text-black font-bold line-clamp-2">
                        {e.title}
                      </h1>
                      <p className="text-black line-clamp-2">{e.desc}</p>
                    </div>
                  </motion.div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
