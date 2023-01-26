import LoginReduxForm from "./LoginForm/LoginForm"

let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
