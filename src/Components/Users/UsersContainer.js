import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from './../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followActionCreator(userId)
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowActionCreator(userId)
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users)
            dispatch(action)
        },
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer