import { NavLink } from "react-router-dom"
import s from "./Dialog.module.css"

const Dialog = (props) => {
    const path = "/dialogs/" + props.id
    const activeLink = (navData) => (navData.isActive ? s.active : "")

    return (
        <NavLink to={path} className={activeLink}>
            {props.name}
        </NavLink>
    )
}

export default Dialog
