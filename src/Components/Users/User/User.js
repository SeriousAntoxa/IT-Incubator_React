import React from "react";
import s from "./User.module.css";
import userLogo from "./../../../assets/image/user.png";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
  }

  follow = () => {
    this.props.follow(this.user.id);
  };

  unfollow = () => {
    this.props.unfollow(this.user.id);
  };

  render() {
    return (
      <div className={s.user}>
        <div className={s.user_logoAndBtn}>
          <div className={s.user_logo}>
            <img
              src={
                !!this.user.photos.small !== false
                  ? this.user.photos.small
                  : userLogo
              }
            />
          </div>
          <div className={s.user_btn}>
            {this.user.followed ? (
              <button className={s.btn} onClick={this.unfollow}>
                Unfollow
              </button>
            ) : (
              <button className={s.btn} onClick={this.follow}>
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={s.user_info}>
          <div className={s.user_name}>
            <p>{this.user.name}</p>
          </div>
          <div className={s.user_status}>
            <p>
              {this.user.status !== null
                ? this.user.status
                : "i don`t have status"}
            </p>
          </div>
          <div className={s.user_location}>
            <p>{"user.location"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
