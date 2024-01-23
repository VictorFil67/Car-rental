import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import SvgLogo from "../SVG/Logo";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../store/auth/selectors";
// import { UserMenu } from "../UserMenu/UserMenu";

export const Navigation = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header>
        <nav className={s.nav}>
          <NavLink to="/">
            <SvgLogo />
          </NavLink>
          <NavLink className={s.link} to="/">
            Car Rental
          </NavLink>
          <NavLink className={s.link} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={s.link} to="/favorites">
            Favorites
          </NavLink>
        </nav>
        <hr />
      </header>
      <Outlet />
    </div>
  );
};
