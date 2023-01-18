import React from "react";
import Header from "./Header";
import { isAuthUser, setAuthData } from "./../../redux/auth-reducer";
import { toggleIsFetching } from "./../../redux/common-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    authAPI.auth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        this.props.setAuthData(id, login, email);
        this.props.isAuthUser(true);
      }
      this.props.toggleIsFetching(false);
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isFetching: state.common.isFetching,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

const HeaderContainer = connect(mapStateToProps, {
  setAuthData,
  isAuthUser,
  toggleIsFetching,
})(HeaderAPIContainer);

export default HeaderContainer;
