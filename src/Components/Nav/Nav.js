import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {

    const activeLink = (navData) => navData.isActive ? s.active : '' 

  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li className={s.list_item}>
            <NavLink to="/profile" className={activeLink}>Profile</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/dialogs" className={activeLink}>Message</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/news" className={activeLink}>News</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/music" className={activeLink}>Music</NavLink>
        </li>
        <li className={s.list_item}>
            <NavLink to="/settings" className={activeLink}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
