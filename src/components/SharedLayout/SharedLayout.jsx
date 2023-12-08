import css from "./SharedLayout.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function SharedLayout(props) {
  return (
    <><div>
      <h1>Header</h1>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="catalog" >Catalog</NavLink></li>
        <li><NavLink to="favorites" >Favorites</NavLink></li>
      </ul>
    </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
