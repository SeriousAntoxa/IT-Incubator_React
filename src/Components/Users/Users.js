import s from "./Users.module.css"
import User from "./User/User"
import React from "react"
import Preloader from "../common/Preloader/Preloader"
import Paginator from "../common/Paginator/Paginator"

let Users = (props) => {
    return (
        <div className={s.users}>
            <>{props.isFetching ? <Preloader /> : null}</>
            <h1>Users</h1>
            <div className={s.paginator_block}>
                <p>Pages: </p>
                <Paginator
                    totalUsers={props.totalUsers}
                    countUserOnPage={props.countUserOnPage}
                    currentPage={props.currentPage}
                    onPageChange={props.onPageChange}
                />
            </div>

            <div className={s.users_block}>
                {props.users.map((u) => {
                    return (
                        <User
                            key={u.id}
                            user={u}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            isFollowing={props.isFollowing}
                            toggleIsFollowing={props.toggleIsFollowing}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Users
