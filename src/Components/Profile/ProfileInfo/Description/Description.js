import s from "./Description.module.css"
import { useState } from "react"
import userLogo from "./../../../../assets/image/user.png"
import ProfileStatus from "./../ProfileStatus/ProfileStatus"
import { reduxForm, Field } from "redux-form"
import { Input, Textarea } from "../../../common/FormControls/FormControls"
import { requiredField } from "../../../../utils/validators/validators"

const Description = (props) => {
    const [editMode, setEditMode] = useState(false)
    const profile = props.profile
    const onSelectMainPhoto = (e) => {
        if (e.target.files[0].length !== 0) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData) => {
        let form = {
            userId: profile.userId,
            lookingForAJob: formData.lookingForAJob || profile.lookingForAJob,
            lookingForAJobDescription:
                formData.lookingForAJobDescription ||
                profile.lookingForAJobDescription,
            aboutMe: formData.aboutMe || profile.aboutMe,
            fullName: formData.fullName || profile.fullName,
            contacts: {
                github:
                    formData.contacts.gitHub || profile.contacts.gitHub || null,
                vk: null,
                facebook: null,
                instagram:
                    formData.contacts.instagram ||
                    profile.contacts.instagram ||
                    null,
                twitter: null,
                website:
                    formData.contacts.webSite ||
                    profile.contacts.webSite ||
                    null,
                youtube: null,
                mainLink: null,
            },
        }
        props.saveProfile(form).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.desc}>
            <div className={s.desc_logo}>
                <img
                    className={s.desc_img}
                    src={profile.photos.small || userLogo}
                    alt="userLogo"
                ></img>
                {props.isOwner && (
                    <input
                        className={s.desc_selectFile}
                        type="file"
                        onChange={onSelectMainPhoto}
                    />
                )}
            </div>

            {editMode ? (
                <ProfileDataFormRedux
                    status={props.status}
                    updateStatus={props.updateStatus}
                    profile={profile}
                    onSubmit={onSubmit}
                    disableEditMode={() => {
                        setEditMode(false)
                    }}
                    initialValues={profile}
                />
            ) : (
                <ProfileData
                    props={props}
                    enableEditMode={() => {
                        setEditMode(true)
                    }}
                    updateStatus={props.updateStatus}
                    status={props.status}
                    isOwner={props.isOwner}
                    profile={profile}
                />
            )}
        </div>
    )
}

const ProfileData = ({
    isOwner,
    profile,
    enableEditMode,
    updateStatus,
    status,
}) => {
    return (
        <div className={s.desc_data}>
            <div className={s.desc_name}>
                <p>{profile.fullName}</p>
            </div>
            <div className={s.desc_status}>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
            <div className={s.desc_info}>
                <div>
                    <b>Looking for a job: </b>
                    {profile.lookingForAJob ? "Yes" : "No"}
                </div>
                <div>
                    <b>About me: </b> {profile.aboutMe || " - "}
                </div>
                <div>
                    <b>Instagram: </b>{" "}
                    {profile.contacts.instagram ? (
                        <a href={profile.contacts.instagram}>
                            {profile.contacts.instagram}
                        </a>
                    ) : (
                        " - "
                    )}
                </div>
                <div>
                    <b>Github: </b>
                    {profile.contacts.github ? (
                        <a href={profile.contacts.github}>
                            {profile.contacts.github}
                        </a>
                    ) : (
                        " - "
                    )}
                </div>
                <div>
                    <b>Website: </b>
                    {profile.contacts.website ? (
                        <a href={profile.contacts.website}>
                            {profile.contacts.website}
                        </a>
                    ) : (
                        " - "
                    )}
                </div>
                <div>
                    <b>Job: </b>
                    {profile.lookingForAJobDescription || " - "}
                </div>
            </div>
            {isOwner && (
                <div>
                    <button onClick={enableEditMode}>Settings</button>
                </div>
            )}
        </div>
    )
}

const ProfileDataForm = ({
    profile,
    handleSubmit,
    status,
    updateStatus,
    disableEditMode,
    error,
}) => {
    return (
        <form className={s.desc_data} onSubmit={handleSubmit}>
            <div className={s.desc_name}>
                <label htmlFor="fullName">Full name: </label>
                <Field
                    name="fullName"
                    component={Input}
                    type="text"
                    validate={[requiredField]}
                />
            </div>
            <div className={s.desc_status}>
                <ProfileStatus status={status} updateStatus={updateStatus} />
            </div>
            <div className={s.desc_info}>
                <div>
                    <label htmlFor="lookingForAJob">Looking for a job: </label>
                    <Field
                        name="lookingForAJob"
                        component={Input}
                        type="checkbox"
                    />
                </div>
                <div>
                    <label htmlFor="aboutMe">About me: </label>
                    <Field
                        name="aboutMe"
                        component={Textarea}
                        type="text"
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <label htmlFor="instagram">Instagram: </label>
                    <Field
                        name="contacts.instagram"
                        component={Input}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="contacts.gitHub">Github: </label>
                    <Field
                        name="contacts.gitHub"
                        component={Input}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="webSite">Website: </label>
                    <Field
                        name="contacts.webSite"
                        component={Input}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="lookingForAJobDescription">
                        My skills:{" "}
                    </label>
                    <Field
                        name="lookingForAJobDescription"
                        component={Input}
                        type="text"
                        validate={[requiredField]}
                    />
                </div>
            </div>
            <div>
                <button>Save</button>
                <button onClick={disableEditMode}>Cancel</button>
            </div>
        </form>
    )
}

let ProfileDataFormRedux = reduxForm({
    form: "profileData",
    enableReinitialize: true,
    destroyOnUnmount: false,
})(ProfileDataForm)

export default Description
