import { connect } from "react-redux"
import {
    follow,
    unfollow,
    toggleIsFollowing,
    requestUsers
} from "./../../redux/users-reducer"
import {
    getUsers,
    getCurrentPage,
    getTotalItemsCount,
    getCountItemsPerPage,
    getIsFollowing,
    getPortionSize
} from "./../../selectors/users-select"
import { getIsFetching } from "./../../selectors/common-select"
import Users from "./Users"
import React from "react"

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers(
            this.props.countItemsPerPage,
            this.props.currentPage
        )
    }

    onPageChange = (page) => {
        this.props.requestUsers(this.props.countItemsPerPage, page)
    }

    onPerPage = (count) => {
        this.props.requestUsers(count, this.props.currentPage)
    }

    render() {
        return (
            <Users
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalItemsCount={this.props.totalItemsCount}
                countItemsPerPage={this.props.countItemsPerPage}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                toggleIsFollowing={this.props.toggleIsFollowing}
                requestUsers={this.props.requestUsers}
                onPerPage={this.onPerPage}
                portionSize={this.portionSize}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalItemsCount: getTotalItemsCount(state),
        countItemsPerPage: getCountItemsPerPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        portionSize: getPortionSize(state),
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
    requestUsers
})(UsersAPIComponent)

export default usersContainer
