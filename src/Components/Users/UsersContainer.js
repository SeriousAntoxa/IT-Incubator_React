import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsers,
  setCurrentPage,
} from "./../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import React from "react";
import { toggleIsFetching } from "../../redux/common-reducer";
class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUserOnPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
        this.props.toggleIsFetching(false)
      });
  }

  onPageChange = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.countUserOnPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
        this.props.toggleIsFetching(false)
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
    isFetching: state.common.isFetching
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

const usersContainer = connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setTotalUsers,
    setCurrentPage,
    toggleIsFetching
  }
)(UsersAPIComponent);

export default usersContainer;
