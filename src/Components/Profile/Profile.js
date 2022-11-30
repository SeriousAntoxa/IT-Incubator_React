import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile_ProfileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.profile_MyPosts}>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
