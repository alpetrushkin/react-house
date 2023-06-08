import React from 'react';
import './newbies.css';
import background from "../../assets/images/pic_background.png";
import star from "../../assets/images/star.svg";

const Newbies = () => {
  return (
    <section className="newbies">
      <img src={background} alt="background"/>
      <div className="container container-newbies">
        <div className="newbies-top">
          <div className="newbies-header">
            <img src={star} alt="star"/>
            <h3>Новая коллекция французских авторов</h3>
          </div>
          <div className="newbies-description">
            <p>
              Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою
              очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
            </p>
            <br/>
            <p>
              Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
              востребованность направлений прогрессивного развития.
            </p>
            <div>
              <a className="newbies-btn" href="#">Ознакомиться</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newbies;