import React from 'react';
import './about.css';
import frame from "../../assets/images/frame.png";
import hand from "../../assets/images/hand.png";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-body">
          <div className="frame-body">
            <img className="frame" src={frame} alt="frame"/>
            <img className="hand" src={hand} alt="hand"/>
          </div>
          <div className="about-box">
            <h3>Наша команда</h3>
            <p>
              Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение
              экспериментов, поражающих <br/> по своей масштабности и грандиозности. Мы вынуждены отталкиваться от
              того, что консультация с широким активом.
            </p>
            <div className="avatar-box">
              <img src={avatar1} alt="avatar1"/>
              <img src={avatar2} alt="avatar2"/>
              <img src={avatar3} alt="avatar3"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;