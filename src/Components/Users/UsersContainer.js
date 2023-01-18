import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
  toggleIsFollowing
} from "./../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import { toggleIsFetching } from "../../redux/common-reducer";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.countUserOnPage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalUsers(data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }

  onPageChange = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);

    usersAPI.getUsers(this.props.countUserOnPage, p).then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsers(data.totalCount);
        this.props.toggleIsFetching(false);
      });
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
  setUsers,
  setTotalUsers,
  setCurrentPage,
  toggleIsFetching,
  toggleIsFollowing,
})(UsersAPIComponent);

export default usersContainer;
