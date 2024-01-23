// import React from "react";
import Slider from "react-slick";
import s from "./Slick.module.css";

export const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/bmw_z8.jpeg"
          alt="car"
        />
      </div>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/mini_convertible.jpeg"
          alt="car"
        />
      </div>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/bentley_azure.jpeg"
          alt="car"
        />
      </div>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/lamborghini_murcielago.jpeg"
          alt="car"
        />
      </div>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/aston_martin_dbs.jpeg"
          alt="car"
        />
      </div>
      <div>
        <img
          className={s.img}
          src="https://ftp.goit.study/img/cars-test-task/pontiac_firebird.jpeg"
          alt="car"
        />
      </div>
    </Slider>
  );
};
