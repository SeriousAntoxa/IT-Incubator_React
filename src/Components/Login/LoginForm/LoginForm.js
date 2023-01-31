import { Field, reduxForm } from "redux-form"
import { requiredField, maxLengthCreator } from "./../../../utils/validators/validators"
import { Input } from "../../common/FormControls/FormControls"

const maxLength10 = maxLengthCreator(10)

let LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component={Input} type="text" validate={[requiredField, maxLength10]}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={Input} type="text" validate={[requiredField, maxLength10]}/>
                </div>
                <div>
                    <label htmlFor="remember">Remember me</label>
                    <Field name="remember" component={Input} type="checkbox" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

let LoginFormRedux = reduxForm({
    form: "login",
})(LoginForm)

export default LoginFormRedux