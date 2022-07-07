import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";
import Banner1 from '../../assets/imgs/Banners/1.png'
import Banner2 from '../../assets/imgs/Banners/2.png'
import Banner3 from '../../assets/imgs/Banners/3.png'


const Banner = () => {

    
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={Banner1}/></SwiperSlide>
        <SwiperSlide><img src={Banner2}/></SwiperSlide>
        <SwiperSlide><img src={Banner3}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner