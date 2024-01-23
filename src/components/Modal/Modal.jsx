import Close from "../SVG/Close/Close";
import Delimiter from "../SVG/Delimiter/Delimiter";
import s from "./Modal.module.css";
export const Modal = ({ url, close }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    // rentalCompany,
    type,
    id,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    // openModal,
  } = url;

  const handleClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const city = address.split(",")[1];
  const country = address.split(",")[2];
  const age = rentalConditions.split(" ")[2].split("\n")[0];
  const license1 = rentalConditions.split(" ")[2].split("\n")[1];
  const license2 = rentalConditions.split(" ")[3];
  const license3 = rentalConditions.split(" ")[4];
  const security = rentalConditions.split("\n")[2];

  // const require = rentalConditions.split(" ")[2].split("\n")[2];
  // console.log(require);
  const mileages = (mileage / 1000).toFixed(3).toString().replace(".", ",");
  return (
    <div>
      <div className={s.Overlay} onClick={handleClick}>
        <div className={s.Modal}>
          <button className={s.closeButton} type="button" onClick={close}>
            <Close />
          </button>
          <div className={s.thumb}>
            <img className={s.img} src={img} alt={model} />
          </div>
          <div className={s.titleInfo}>
            <h3>{make}</h3>
            <h3 className={s.model}>{model},</h3>
            <h3>{year}</h3>
          </div>
          <ul className={s.extraInfo}>
            <li>{city}</li>
            <li>
              <Delimiter />
            </li>
            <li>{country}</li>
            <li>
              <Delimiter />
            </li>
            <li>id: {id}</li>
            <li>
              <Delimiter />
            </li>
            <li>Year: {year}</li>
            <li>
              <Delimiter />
            </li>
            <li>Type: {type}</li>
          </ul>
          <ul className={s.extraInfo}>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>
              <Delimiter />
            </li>
            <li>Engine Size: {engineSize}</li>
          </ul>
          <p className={s.description}>{description}</p>
          <h4 className={s.accessories}>Accessories and functionalities:</h4>
          <ul className={s.extraInfo}>
            <li>{accessories[0]}</li>
            <li>
              <Delimiter />
            </li>
            <li>{accessories[1]}</li>
            <li>
              <Delimiter />
            </li>
            <li>{accessories[2]}</li>
          </ul>
          <ul className={s.extraInfo}>
            <li>{functionalities[0]}</li>
            <li>
              <Delimiter />
            </li>
            <li>{functionalities[1]}</li>
            <li>
              <Delimiter />
            </li>
            <li>{functionalities[2]}</li>
          </ul>
          <h4 className={s.accessories}>Rental Conditions: </h4>
          <ul className={s.rentalConditions}>
            <li className={s.age}>
              Minimum age: <span className={s.numAge}>{age}</span>
            </li>
            <li className={s.license}>
              {license1} {license2} {license3}
            </li>
          </ul>
          <ul className={s.rentalConditions}>
            <li className={s.license}>{security}</li>
            <li className={s.age}>
              Mileage: <span className={s.mleageNum}>{mileages}</span>
            </li>
            <li className={s.age}>
              Price: <span className={s.mleageNum}>{rentalPrice}</span>
            </li>
          </ul>
          {/* <p>
            Mleage: <span className={s.mleageNum}>{mileages}</span>
          </p> */}
          <a className={s.tel} href="tel:+380730000000">
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
};
