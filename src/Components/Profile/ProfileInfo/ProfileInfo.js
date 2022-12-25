import s from "./ProfileInfo.module.css";
import HeadImage from "./HeadImage/HeadImage";
import Description from "./Description/Description";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfo_HeadImage}>
        <HeadImage profile={props.profile}/>
      </div>
      <div className={s.profileInfo_Description}>
        <Description profile={props.profile}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
