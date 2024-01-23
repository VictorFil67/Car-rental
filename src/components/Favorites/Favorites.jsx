import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../store/cars/selectors";
import { useEffect } from "react";
import { fetchAllCars } from "../../store/cars/operations";
import { Cars } from "../Cars/Cars";

export const Favorites = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <>
      <Cars cars={cars} />
    </>
  );
};
