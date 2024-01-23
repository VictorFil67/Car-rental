// import React from "react";
import { useEffect, useState } from "react";
import { Car } from "../Car/Car";
import s from "./Cars.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCars } from "../../store/cars/operations";
// import { selectCars, selectPage } from "../../store/cars/selectors";
import { Modal } from "../Modal/Modal";
// import { LoadMore } from "../LoadMore/LoadMore";
// import { toast } from "react-toastify";

export const Cars = ({ cars }) => {
  //   const dispatch = useDispatch();
  //   const cars = useSelector(selectCars);
  //   const page = useSelector(selectPage);
  //   console.log(cars);

  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState(null);
  //   const [resCars, setResCars] = useState(null);
  //   const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     dispatch(fetchCars(page))
  //       .unwrap()
  //       .then((res) => {
  //         // navigate('/contacts');
  //         setResCars(res);
  //         console.log(res);
  //         toast.success(`Everything is OK!!!`);
  //       })
  //       .catch(() => {
  //         toast.error("Something went wrong!!!");
  //         // alert('error');
  //       });
  //   }, [dispatch, page]);

  const openModal = (url) => {
    // this.setState({ url, modal: true });
    setUrl(url);
    // console.log(url);
    setModal(true);
    window.addEventListener("keydown", onWindowEscape);
  };
  const onWindowEscape = (e) => {
    // console.log(e.code);
    if (e.code === "Escape") {
      closeModal();
      window.removeEventListener("keydown", onWindowEscape);
    }
  };
  const closeModal = () => {
    // this.setState({ modal: false });
    setModal(false);
  };
  return (
    <>
      {modal && <Modal url={url} close={closeModal} />}
      <ul className={s.carsList}>
        {cars.map((car) => (
          <Car key={car.id} car={car} {...car} openModal={openModal} />
        ))}
      </ul>
      {/* {resCars?.length >= 12 && <LoadMore />} */}
    </>
  );
};
