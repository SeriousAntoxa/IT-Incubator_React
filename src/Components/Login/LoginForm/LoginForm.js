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
                    <Field
                        name="login"
                        component={Input}
                        type="text"
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        component={Input}
                        type="text"
                        validate={[requiredField]}
                    />
                </div>
                <div>
                    <label htmlFor="remember">Remember me</label>
                    <Field name="remember" component={Input} type="checkbox" />
                </div>
                {props.captchaUrl && (
                    <div className="">
                        <label htmlFor="remember">Please enter captcha</label>
                        <div>
                            <img src={props.captchaUrl} alt="captcha"></img>
                        </div>

                        <Field
                            name="captcha"
                            component={Input}
                            type="text"
                            validate={[requiredField]}
                        />
                    </div>
                )}
                {props.error && (
                    <div className={s.form_error}>
                        <p>{props.error}</p>
                    </div>
                )}
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
