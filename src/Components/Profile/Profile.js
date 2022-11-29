import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import HeadImage from "./HeadImage/HeadImage";
import Description from "./Description/Description";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile_image}>
        <HeadImage />
      </div>
      <div className={s.profile_desc}>
        <Description />
      </div>
      <div className={s.profile_posts}>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
