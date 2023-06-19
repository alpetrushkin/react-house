import React from 'react';
import styles from './Slider.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation } from "swiper";

import layer from '../../assets/images/Layer.png';
import pigeon from '../../assets/images/imgonline.png';

const Slider = () => {
  return (
    <div className={styles.root}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={layer} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pigeon} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;