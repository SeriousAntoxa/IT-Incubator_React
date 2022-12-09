import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <div className={s.profile}>
      <div className={s.profile_ProfileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.profile_MyPosts}>
        <MyPosts state={props.state} dispatch={props.dispatch}/>
      </div>
    </div>
  );
};

export default Profile;
