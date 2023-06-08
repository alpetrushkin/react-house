import React from 'react';
import './hero.css';
import layer from "../../assets/images/Layer.png";
import Button from "../UI/button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-body">
          <div className="hero-left">
            <img src={layer} alt="layer"/>
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