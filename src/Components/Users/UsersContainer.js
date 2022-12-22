import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setTotalUsersActionCreator, setCurrentPageActionCreator } from './../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        countUserOnPage: state.usersPage.countUserOnPage
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
        setTotalUsers: (pages) => {
            let action = setTotalUsersActionCreator(pages)
            dispatch(action)
        },
        setCurrentPage: (page) => {
            let action = setCurrentPageActionCreator(page)
            dispatch(action)
        },
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default usersContainer