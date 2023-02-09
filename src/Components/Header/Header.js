import s from "./Header.module.css"
import { NavLink } from "react-router-dom"
import Preloader from "./../common/Preloader/Preloader"

const Header = (props) => {
    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <header className={s.header}>
                <div className={s.header_logo}>
                    <img
                        src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
                        alt="logo"
                    ></img>
                </div>
                <div>
                    {props.isAuth ? (
                        <div>
                            {props.login}
                            <button onClick={props.logout}>Log out</button>
                        </div>
                    ) : (
                        <NavLink to={"/login"}>Login</NavLink>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header
