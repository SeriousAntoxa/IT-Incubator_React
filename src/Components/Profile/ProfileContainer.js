import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    profileAPI.getUser(userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
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

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  ProfileAPIComponent
);

const ProfileContainerWithParams = () => {
  const params = useParams();
  return <ProfileContainer params={params} />;
};
export default ProfileContainerWithParams;
