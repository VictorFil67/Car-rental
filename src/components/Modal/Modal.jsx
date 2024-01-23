import s from "./Modal.module.css";
export const Modal = ({ url, close }) => {
  console.log(url);
  const handleClick = (e) => {
    // console.log(e.target);
    if (e.target === e.currentTarget) {
      close();
    }
  };
  const mileage = (url.mileage / 1000).toFixed(3).toString().replace(".", ",");
  return (
    <div>
      <div
        className={s.Overlay}
        onClick={handleClick}
        // style={{
        //   backgroundColor: 'black',
        //   width: '100vw',
        //   height: '100vh',
        // }}
      >
        <div className={s.Modal}>
          <button className={s.closeButton} type="button" onClick={close}>
            close
          </button>
          <div className={s.thumb}>
            <img className={s.img} src={url.img} alt={url.model} />
          </div>
          <p>
            Mleage: <span className={s.mleageNum}>{mileage}</span>
          </p>
          <a className={s.tel} href="tel:+380730000000">
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
};
