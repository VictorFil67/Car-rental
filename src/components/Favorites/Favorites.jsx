// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../store/cars/selectors";
// import { Car } from "../Car/Car";
// import s from "./Favorites.module.css";
import { useEffect } from "react";
import { fetchAllCars } from "../../store/cars/operations";
import { Cars } from "../Cars/Cars";
// import { Modal } from "../Modal/Modal";

export const Favorites = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  //   const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  //   const getFavorites = () => {
  //     return cars.filter((car) => favorites.includes(car.id));
  //   };
  console.log(cars);
  return (
    <>
      {/* {modal && <Modal url={url} close={closeModal} />} */}
      {/* <ul className={s.carsList}>
        {getFavorites().map((car) => (
          <Car
            key={car.id}
            car={car}
            {...car} */}
      {/* // openModal={openModal} */}
      {/* //       />
    //     ))}
    //   </ul> */}
      <Cars cars={cars} />
      {/* <Cars /> */}
    </>
  );
};
