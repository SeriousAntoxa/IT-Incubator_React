import s from "./Description.module.css";
import userLogo from "./../../../../assets/image/user.png";

const Description = (props) => {
  return (
    <div className={s.desc}>
      <div className={s.desc_logo}>
        <img
          src={
            props.profile.photos.small !== null
              ? props.profile.photos.small
              : userLogo
          }
          alt="userLogo"
        ></img>
      </div>
      <div className={s.desc_data}>
        <div className={s.desc_name}>
          <p>{props.profile.fullName}</p>
        </div>
        <div className={s.desc_info}>
          <p>Обо мне: {props.profile.aboutMe}</p>
          <p>instagram: {props.profile.contacts.instagram}</p>
          <p>github: {props.profile.contacts.github}</p>
          <p>Информация о работе: {props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
