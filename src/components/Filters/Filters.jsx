import { useState } from "react";
import { useDispatch } from "react-redux";
import Select, { components } from "react-select";
import { fetchFilteredCars } from "../../store/cars/operations";
import { toast } from "react-toastify";
import { filteredByPrice } from "../../store/cars/slice";
import s from "./Filters.module.css";
import { myStyles } from "./FilterStyles";
import ArrowUpSvg from "../SVG/FiltersSvg/ArrowUpSvg";
import ArrowDownSvg from "../SVG/FiltersSvg/ArrowDownSvg";

const options = [
  { value: "", label: "All" },
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
];
const optionsPrice = [];
for (let i = 30; i <= 500; i += 10) {
  optionsPrice.push({ value: i, label: i });
}
// optionsPrice.push({ value: 40, label: "40" });
console.log(optionsPrice);
// import React from 'react'

export const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);
    console.log(parseInt("$40".replace("$", "")));
    dispatch(
      fetchFilteredCars({
        // page: ,
        make: selectedOption?.value,
        // rentalPrice: selectedOptionPrice?.value,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(filteredByPrice(selectedOptionPrice));
        console.log(selectedOptionPrice);
        toast.success(`Filtered is OK!!!`);
      })
      .catch((err) => {
        toast.error(err);
        // alert('error');
      });
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
      </components.DropdownIndicator>
    );
  };
  return (
    <div className={s.formWrap}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <div className="makes">
          <p className={s.filterTitle}>Car brand</p>
          <div className={s.selectBrand}>
            <Select
              placeholder="Enter the text"
              styles={myStyles}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
        <div className="price">
          <p className={s.filterTitle}>Price/ 1 hour</p>
          <div className={s.selectPrice}>
            <Select
              placeholder="To $"
              styles={myStyles}
              defaultValue={selectedOptionPrice}
              onChange={setSelectedOptionPrice}
              options={optionsPrice}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
        <div className="Makes">
          <p className={s.filterTitle}>Сar mileage / km</p>
          <div className={s.inputs}>
            <input
              className={s.mileageFrom}
              type="text"
              name="from"
              placeholder="From"
            />
            <input
              className={s.mileageTo}
              type="text"
              name="to"
              placeholder="To"
            />
          </div>
        </div>
        <button className={s.search} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
