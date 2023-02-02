import React from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { logout } from "./../../redux/auth-reducer"

class HeaderAPIContainer extends React.Component {
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
    logout
})(HeaderAPIContainer)

export default HeaderContainer
