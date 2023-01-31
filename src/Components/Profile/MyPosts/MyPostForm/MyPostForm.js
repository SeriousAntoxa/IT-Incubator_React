import { Field, reduxForm } from "redux-form"
import s from "./../MyPosts.module.css"
import { maxLengthCreator } from "./../../../../utils/validators/validators"
import { Textarea } from "./../../../common/FormControls/FormControls"

const maxLength20 = maxLengthCreator(20)

let MyPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={s.myPost_form}>
                <div className={s.form_field}>
                    <label htmlFor="newPost">New post</label>
                    <Field name="newPost" component={Textarea} className={s.form_textarea} validate={[maxLength20]}/>
                </div>
                <div>
                    <button type="submit" className={s.form_btn}>Submit</button>
                </div>
            </form>
        </div>
    )
}

let MyPostFormRedux = reduxForm({
    form: "myPost",
})(MyPostForm)

export default MyPostFormRedux
