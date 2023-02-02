import { Field, reduxForm } from "redux-form"
import { requiredField } from "./../../../utils/validators/validators"
import { Input } from "../../common/FormControls/FormControls"
import s from "./../../common/FormControls/FormControls.module.css"

let LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component={Input} type="text" validate={[requiredField]}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={Input} type="text" validate={[requiredField]}/>
                </div>
                <div>
                    <label htmlFor="remember">Remember me</label>
                    <Field name="remember" component={Input} type="checkbox" />
                </div>
                { props.error && <div className={s.form_error}>
                    <p>{props.error}</p>
                </div>}
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