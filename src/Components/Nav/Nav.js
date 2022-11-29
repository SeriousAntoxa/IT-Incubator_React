import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.list_item}>
            <NavLink to="/profile" className={(navData) => navData.isActive ? s.active : '' }>Profile</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/dialogs" className={(navData) => navData.isActive ? s.active : '' }>Message</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/news" className={(navData) => navData.isActive ? s.active : '' }>News</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/music" className={(navData) => navData.isActive ? s.active : '' }>Music</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/settings" className={(navData) => navData.isActive ? s.active : '' }>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
