import React from "react";
import s from "./User.module.css";
import userLogo from "./../../../assets/image/user.png";

let User = (props) => {
  let user = props.user;

  let follow = () => {
    props.follow(user.id);
  };

  let unfollow = () => {
    props.unfollow(user.id);
  };

  return (
    <div className={s.user}>
      <div className={s.user_logoAndBtn}>
        <div className={s.user_logo}>
          <img
            src={user.photos.small !== null ? user.photos.small : userLogo}
            alt='user-logo'
          />
        </div>
        <div className={s.user_btn}>
          {user.followed ? (
            <button className={s.btn} onClick={unfollow}>
              Unfollow
            </button>
          ) : (
            <button className={s.btn} onClick={follow}>
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

export default User;
