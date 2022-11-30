import s from "./ProfileInfo.module.css";
import HeadImage from "./HeadImage/HeadImage";
import Description from "./Description/Description";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfo_HeadImage}>
        <HeadImage />
      </div>
      <div className={s.profileInfo_Description}>
        <Description />
      </div>
    </div>
  );
};

export default ProfileInfo;
