import s from "./Description.module.css"
import userLogo from "./../../../../assets/image/user.png"
import ProfileStatus from "./../ProfileStatus/ProfileStatus"

const Description = (props) => {

    const onSelectMainPhoto = (e) => {
        if( e.target.files[0].length !== 0 ) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.desc}>
            <div className={s.desc_logo}>
                <img
                    className={s.desc_img}
                    src={props.profile.photos.small || userLogo}
                    alt="userLogo"
                ></img>
                {props.isOwner && <input className={s.desc_selectFile} type='file' onChange={onSelectMainPhoto}/>}
            </div>
            <div className={s.desc_data}>
                <div className={s.desc_name}>
                    <p>{props.profile.fullName}</p>
                </div>
                <div className={s.desc_status}>
                    <p>My status:</p>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
                <div className={s.desc_info}>
                    <p>
                        Looking for a job:{" "}
                        {props.profile.lookingForAJob ? "Yes" : "No"}
                    </p>
                    <p>About me: {props.profile.aboutMe || " - "}</p>
                    <p>
                        Instagram: {props.profile.contacts.instagram || " - "}
                    </p>
                    <p>Github: {props.profile.contacts.github || " - "}</p>
                    <p>Website: {props.profile.contacts.website || " - "}</p>
                    <p>
                        Job: {props.profile.lookingForAJobDescription || " - "}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Description
