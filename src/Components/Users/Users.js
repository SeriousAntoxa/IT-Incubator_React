import s from "./Users.module.css";
import User from "./User/User";
import React from "react";
import Preloader from "../common/Preloader";

let Users = (props) => {
  let totalPages = Math.ceil(props.totalUsers / props.countUserOnPage);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <>
        {props.isFetching ? (
            <Preloader />
        ) : null}
      </>

      <h1>Users</h1>
      <div>
        <p>Pages: </p>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? s.activeLink : " "}
              onClick={() => props.onPageChange(p)}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>

      <div className={s.block}>
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
          );
        })}
      </div>
    </div>
  );
};

export default Users;
