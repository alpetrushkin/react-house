import React from 'react';
import Hero from "../components/hero/Hero";
import Catalog from "../components/catalog/Catalog";
import Newbies from "../components/newbies/Newbies";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Catalog />
        <Newbies />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;