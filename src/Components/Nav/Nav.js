import { NavLink } from "react-router-dom"
import s from "./Nav.module.css"
import Sidebar from "./Sidebar/Sidebar"

const Nav = () => {
    const activeLink = (navData) => (navData.isActive ? s.active : "")

    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                <li className={s.list_item}>
                    <NavLink to="/profile" className={activeLink}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.list_item}>
                    <NavLink to="/dialogs" className={activeLink}>
                        Message
                    </NavLink>
                </li>
                <li className={s.list_item}>
                    <NavLink to="/news" className={activeLink}>
                        News
                    </NavLink>
                </li>
                <li className={s.list_item}>
                    <NavLink to="/users" className={activeLink}>
                        Users
                    </NavLink>
                </li>
                <li className={s.list_item}>
                    <NavLink to="/music" className={activeLink}>
                        Music
                    </NavLink>
                </li>
                <li className={s.list_item}>
                    <NavLink to="/settings" className={activeLink}>
                        Settings
                    </NavLink>
                </li>
            </ul>
            <Sidebar />
        </nav>
    )
}

export default Nav
