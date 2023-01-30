import { Field, reduxForm } from "redux-form"

let MessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="newMessage">New message</label>
                    <Field name="newMessage" component="textarea" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

let MessageFormReact = reduxForm({
    form: "message",
})(MessageForm)

export default MessageFormReact
