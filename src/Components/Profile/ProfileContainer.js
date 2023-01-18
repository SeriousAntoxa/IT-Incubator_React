import React from "react";
import Profile from "./Profile";
import { getUser } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    this.props.getUser(userId);
  }
  render() {
    return <Profile profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const ProfileContainer = connect(mapStateToProps, { getUser })(
  ProfileAPIComponent
);

const ProfileContainerWithParams = () => {
  const params = useParams();
  return <ProfileContainer params={params} />;
};

export default ProfileContainerWithParams;
