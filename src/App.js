import React from 'react';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Catalog from "./components/catalog/Catalog";
import Newbies from "./components/newbies/Newbies";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Newbies />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
