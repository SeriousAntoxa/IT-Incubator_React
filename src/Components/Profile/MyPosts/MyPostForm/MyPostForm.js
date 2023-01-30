import { Field, reduxForm } from "redux-form"

let MyPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="newPost">New post</label>
                    <Field name="newPost" component="textarea" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

let MyPostFormRedux = reduxForm({
    form: "myPost",
})(MyPostForm)

export default MyPostFormRedux
