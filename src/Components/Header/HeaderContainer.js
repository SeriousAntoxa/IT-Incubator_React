import React from "react"
import Header from "./Header"
import { getAuthUserData, logout } from "./../../redux/auth-reducer"
import { connect } from "react-redux"

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

const HeaderContainer = connect(mapStateToProps, {
    getAuthUserData, logout,
})(HeaderAPIContainer)

export default HeaderContainer
