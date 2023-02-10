import s from "./Users.module.css"
import User from "./User/User"
import React from "react"
import Preloader from "../common/Preloader/Preloader"
import Paginator from "../common/Paginator/Paginator"
import PerPage from "../common/PerPage/PerPage"

let Users = (props) => {
    return (
        <div className={s.users}>
            <>{props.isFetching ? <Preloader /> : null}</>
            <h1>Users</h1>
            <div className={s.paginator_block}>
                <div>
                    <p>Pages: </p>
                    <Paginator
                        totalItemsCount={props.totalItemsCount}
                        countItemsPerPage={props.countItemsPerPage}
                        currentPage={props.currentPage}
                        onPageChange={props.onPageChange}
                        portionSize={props.portionSize}
                    />
                </div>
                <div>
                    <p>Count users on page: </p>
                    <PerPage
                        onPerPage={props.onPerPage}
                        countItemsPerPage={props.countItemsPerPage}
                    />
                </div>
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
