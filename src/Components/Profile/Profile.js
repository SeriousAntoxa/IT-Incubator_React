import s from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Preloader from "./../common/Preloader"

const Profile = (props) => {
    if (!props.profile && !props.status) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.profile_ProfileInfo}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
            <div className={s.profile_MyPosts}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile
