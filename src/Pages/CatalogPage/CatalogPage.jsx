// import React from "react";
import { Filters } from "../../components/Filters/Filters";
import { Cars } from "../../components/Cars/Cars";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectPage } from "../../store/cars/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../store/cars/operations";
import { toast } from "react-toastify";
import { LoadMore } from "../../components/LoadMore/LoadMore";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const [resCars, setResCars] = useState(null);

  useEffect(() => {
    dispatch(fetchCars(page))
      .unwrap()
      .then((res) => {
        setResCars(res);
        toast.success(`Cars are received`);
      })
      .catch(() => {
        toast.error("Something went wrong!!!");
      });
  }, [dispatch, page]);

  return (
    <main>
      <section>
        <Filters />
      </section>
      <section>
        <Cars cars={cars} />
        {resCars?.length >= 12 && cars.length >= 12 && cars.length < 35 && (
          <LoadMore />
        )}
      </section>
    </main>
  );
};
