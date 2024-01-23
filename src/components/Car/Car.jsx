// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Delimiter from "../SVG/Delimiter/Delimiter";
import s from "./Car.module.css";
import { toggleHeart } from "../../store/cars/slice";
import { selectFavorites } from "../../store/cars/selectors";
import Heart from "../SVG/Heart/Heart";
import NotHeart from "../SVG/Heart/NotHeart";

export const Car = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
  car,
  openModal,
}) => {
  const city = address.split(",")[1];
  //   console.log(city);
  const country = address.split(",")[2];
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const heart = favorites.includes(id);
  //   function toggleHeart() {
  //     if (!heart) {
  //       setHeart(true);
  //     } else {
  //       setHeart(false);
  //     }
  //   }
  const handleClick = () => {
    openModal(car);
  };
  return (
    <li className="s.carItem">
      {/* <Heart type="button" onClick={toggleHeart}>
        {!heart ? <SvgNoHeart /> : <SvgHeart />}
      </Heart> */}
      <div className={s.picWrap}>
        <button
          className={s.favorites}
          type="button"
          onClick={() => dispatch(toggleHeart(id))}
        >
          {heart ? <Heart /> : <NotHeart />}
        </button>
        <img className={s.pic} src={img} alt={model} />
      </div>
      <div className={s.mainInfo}>
        <div className={s.titleInfo}>
          <h3>{make}</h3>
          <h3>{model},</h3>
          <h3>{year}</h3>
        </div>
        <h3>{rentalPrice}</h3>
      </div>
      <ul className={s.extraInfo}>
        <li>
          {city}
          {/* <Delimiter /> */}
        </li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>{country}</li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>{rentalCompany}</li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>Premium</li>
      </ul>
      <ul className={s.extraInfo}>
        <li>{type}</li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>{model}</li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>{id}</li>
        <li>
          <Delimiter />{" "}
        </li>
        <li>{functionalities[0]}</li>
      </ul>
      <button className={s.learnMore} type="button" onClick={handleClick}>
        Learn more
      </button>
    </li>
  );
};
