import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;
  const activeLink = (navData) => (navData.isActive ? s.active : "");

  return (
    <li className={s.dialog}>
      <NavLink to={path} className={activeLink}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Dialog;
