import { connect } from "react-redux"
import {
    follow,
    unfollow,
    toggleIsFollowing,
    requestUsers,
} from "./../../redux/users-reducer"
import {
    getUsers,
    getCurrentPage,
    getTotalUsers,
    getCountUserOnPage,
    getIsFollowing,
} from "./../../selectors/users-select"
import { getIsFetching } from "./../../selectors/common-select"
import Users from "./Users"
import React from "react"

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(
            this.props.countUserOnPage,
            this.props.currentPage
        )
    }

    onPageChange = (page) => {
        this.props.requestUsers(this.props.countUserOnPage, page)
    }

    render() {
        return (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsers={this.props.totalUsers}
                countUserOnPage={this.props.countUserOnPage}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                toggleIsFollowing={this.props.toggleIsFollowing}
                requestUsers={this.props.requestUsers}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalUsers: getTotalUsers(state),
        countUserOnPage: getCountUserOnPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
    }
}

/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followActionCreator(userId);
      dispatch(action);
    },
    unfollow: (userId) => {
      let action = unfollowActionCreator(userId);
      dispatch(action);
    },
    setUsers: (users) => {
      let action = setUsersActionCreator(users);
      dispatch(action);
    },
    setTotalUsers: (pages) => {
      let action = setTotalUsersActionCreator(pages);
      dispatch(action);
    },
    setCurrentPage: (page) => {
      let action = setCurrentPageActionCreator(page);
      dispatch(action);
    },
    toggleIsFetching: (isFetching) => {
        let action = toggleIsFetchingActionCreator(isFetching)
        dispatch(action)
    }
  };
};*/

const usersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    toggleIsFollowing,
    requestUsers,
})(UsersAPIComponent)

export default usersContainer
