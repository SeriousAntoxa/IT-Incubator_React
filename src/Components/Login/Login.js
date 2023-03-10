import { connect } from "react-redux"
import LoginFormRedux from "./LoginForm/LoginForm"
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom"

let Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.remember)
    }
    if (props.isAuth) return <Navigate to="/profile" replace />
    return (
        <div>
            <h1>Login page</h1>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
