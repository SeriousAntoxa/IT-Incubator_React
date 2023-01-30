import LoginFormRedux from "./LoginForm/LoginForm"

let Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login page</h1>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
