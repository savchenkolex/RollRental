import css from "./SharedLayout.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function SharedLayout(props) {
  return (
    <>
      <div>
        <div className={`${css.headerBox} container`}>
          <div className={css.logoBox}>
            <Link to="/" className={css.logo}>Your money - our cars!</Link>
            <p className={css.moto}>Enjoy life. We take care of the service.</p>
          </div>
          <ul className={css.menuBox}>
            <li>
              <NavLink to="/" className={css.menuLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="catalog" className={css.menuLink}>Catalog</NavLink>
            </li>
            <li>
              <NavLink to="favorites" className={css.menuLink}>Favorites</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
