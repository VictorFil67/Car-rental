// import styled from "styled-components";
export const myStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: "14px",
    background: "#F7F7FB",
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    width: "100%",
    height: "48px",
    "&:hover, &:focus": {
      border: "none",
      outline: "none",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    background: "transparent",
    padding: 0,
    margin: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",

    background: "#FFF",
    color: "rgba(18, 20, 23, 0.20)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    background: state.isSelected ? "rgba(255, 255, 255, 0.10)" : "transparent",
    color: state.isSelected ? "#121417" : provided.color,
    ":hover": {
      background: "rgba(255, 255, 255, 0.10)",
      color: "#121417",
    },
  }),
  menuList: (base) => ({
    ...base,
    height: "100%",

    "::-webkit-scrollbar": {
      width: "2px",
    },
    "::-webkit-scrollbar-track": {
      background: "inset 0 0 2px rgba(0, 0, 0, 0.2)",
    },
    "::-webkit-scrollbar-thumb": {
      background: " var(--transparency-20)",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: " var(--transparency-20)",
    },
  }),
};
