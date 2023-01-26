import { Field, reduxForm } from "redux-form"

let LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="remember">Remember me</label>
                    <Field name="remember" component="input" type="checkbox" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

let LoginReduxForm = reduxForm({
    form: "login",
})(LoginForm)

export default LoginReduxForm