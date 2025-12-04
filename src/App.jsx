import React from "react";
import Navbar from "./components/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          followSpeed: 1.5,
          zIndex: 999,
        }}
      >
        <Navbar></Navbar>
        <Hero></Hero>
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          followSpeed: 1.5,
          zIndex: 999,
        }}
      >
        <Service></Service>
        <Banner></Banner>
        <Blog></Blog>
        <Footer></Footer>
      </UpdateFollower>
    </main>
  );
};

export default App;
