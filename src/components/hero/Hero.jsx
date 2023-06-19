import React from 'react';
import Button from "../UI/button/Button";
import Slider from "../Slider/Slider";
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-body">
          <div className="hero-left">
            <Slider />
          </div>
          <div className="hero-right">
            <h1 className="hero-title">Реплики картин от <span>Ink. House</span></h1>
            <p className="hero-subtitle">Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
              произведения, доступные цены.</p>
            <Button title={'Продукция'}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;