<<<<<<< HEAD
import React from "react";
import s from "./User.module.css";
import userLogo from "./../../../assets/image/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

let User = (props) => {
  let user = props.user;
  let follow = () => {
    props.toggleIsFollowing(true, user.id)
    usersAPI.followUsers(user.id).then((userId) => {
      props.follow(userId);
      props.toggleIsFollowing(false, user.id)
    }); 
  };

  let unfollow = () => {
    props.toggleIsFollowing(true, user.id)
    usersAPI.unfollowUsers(user.id).then((userId) => {
      props.unfollow(userId);
      props.toggleIsFollowing(false, user.id)
    });
  };

  return (
    <div className={s.user}>
      <div className={s.user_logoAndBtn}>
        <div className={s.user_logo}>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : userLogo}
              alt="user-logo"
            />
          </NavLink>
        </div>
        <div className={s.user_btn}>
          {user.followed ? (
            <button disabled={props.isFollowing.some(id => id === user.id)} className={s.btn} onClick={unfollow}>
              Unfollow
            </button>
          ) : (
            <button disabled={props.isFollowing.some(id => id === user.id)} className={s.btn} onClick={follow}>
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.user_info}>
        <div className={s.user_name}>
          <p>{user.name}</p>
        </div>
        <div className={s.user_status}>
          <p>{user.status !== null ? user.status : "i don`t have status"}</p>
        </div>
        <div className={s.user_location}>
          <p>{"user.location"}</p>
        </div>
      </div>
    </div>
  );
};
=======
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
                            src={
                                user.photos.small !== null
                                    ? user.photos.small
                                    : userLogo
                            }
                            alt="user-logo"
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
>>>>>>> feature

export default User;
