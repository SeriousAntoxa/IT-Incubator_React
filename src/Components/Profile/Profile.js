import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

  return (
    <div className={s.profile}>
      <div className={s.profile_ProfileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.profile_MyPosts}>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
