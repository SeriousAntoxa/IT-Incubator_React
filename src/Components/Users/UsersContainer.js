import { connect } from "react-redux";
import {
  follow,
  unfollow,
  toggleIsFollowing,
  getUsers
} from "./../../redux/users-reducer";
import Users from "./Users";
import React from "react";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.countUserOnPage, this.props.currentPage)
  }

  onPageChange = (page) => {
    this.props.getUsers(this.props.countUserOnPage, page)
  };

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
        getUsers={this.props.getUsers}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalUsers: state.usersPage.totalUsers,
    countUserOnPage: state.usersPage.countUserOnPage,
    isFetching: state.common.isFetching,
    isFollowing: state.usersPage.isFollowing
  };
};

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
  getUsers
})(UsersAPIComponent);

export default usersContainer;
