import React from "react"
import s from "./User.module.css"
import userLogo from "./../../../assets/image/user.png"
import { NavLink } from "react-router-dom"

let User = (props) => {
    let user = props.user

    let follow = () => {
        props.follow(user.id)
    }

    let unfollow = () => {
        props.unfollow(user.id)
    }

    return (
        <div className={s.user}>
            <div className={s.user_logoAndBtn}>
                <div className={s.user_logo}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small || userLogo}
                            alt="user logo"
                        />
                    </NavLink>
                </div>
                <div className={s.user_btn}>
                    {user.followed ? (
                        <button
                            disabled={props.isFollowing.some(
                                (id) => id === user.id
                            )}
                            className={s.btn}
                            onClick={unfollow}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={props.isFollowing.some(
                                (id) => id === user.id
                            )}
                            className={s.btn}
                            onClick={follow}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </div>
            <div className={s.user_info}>
                <div className={s.user_name}>
                    <p>{user.name}</p>
                </div>
            </div>
        </div>
    )
}

export default User
