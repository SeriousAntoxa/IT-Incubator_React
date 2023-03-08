import s from "./../Description.module.css"
import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { Input, Textarea } from "./../../../../common/FormControls/FormControls"
import { requiredField } from "./../../../../../utils/validators/validators"
import { setUserProfile } from "./../../../../../redux/profile-reducer"
import ProfileStatus from "./../../ProfileStatus/ProfileStatus"
import { connect } from "react-redux"

class ProfileDataFormR extends Component {
    render() {
        const {
            handleSubmit,
            status,
            updateStatus,
            disableEditMode,
            profile,
            load,
        } = this.props

        return (
            <form className={s.desc_data} onSubmit={handleSubmit}>
                <button type="button" onClick={() => load(profile)}>
                    Load Account
                </button>
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
                    <ProfileStatus
                        status={status}
                        updateStatus={updateStatus}
                    />
                </div>
                <div className={s.desc_info}>
                    <div>
                        <label htmlFor="lookingForAJob">
                            Looking for a job:{" "}
                        </label>
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
                        <Field name="instagram" component={Input} type="text" />
                    </div>
                    <div>
                        <label htmlFor="gitHub">Github: </label>
                        <Field name="gitHub" component={Input} type="text" />
                    </div>
                    <div>
                        <label htmlFor="webSite">Website: </label>
                        <Field name="webSite" component={Input} type="text" />
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
}

const mapStateToProps = (state, props) => ({
    initialValues: state.profilePage.profile,
})

let ProfileDataForm = connect(mapStateToProps, {
    load: setUserProfile,
})(
    reduxForm({
        form: "profileData",
    })(ProfileDataFormR)
)

export default ProfileDataForm
