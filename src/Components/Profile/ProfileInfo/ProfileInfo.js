import s from "./ProfileInfo.module.css"
import Description from "./Description/Description"

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfo_Description}>
                <Description
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                />
            </div>
        </div>
    )
}

export default ProfileInfo
