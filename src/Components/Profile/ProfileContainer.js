<<<<<<< HEAD
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
=======
import React from "react"
import Profile from "./Profile"
import { getUser, getStatus, updateStatus } from "../../redux/profile-reducer"
import { connect } from "react-redux"
//import { compose } from "redux";
import { Navigate, useParams } from "react-router-dom"

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = !!this.props.params ? this.props.params.userId : this.props.userId
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.params && !this.props.auth) return <Navigate to="/login" replace />
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        auth: state.auth.isAuth,
        userId: state.auth.userId,
        status: state.profilePage.status,
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    getUser,
    getStatus,
    updateStatus,
})(ProfileAPIComponent)

export const ProfileContainerWithParams = () => {
    const params = useParams()
    return <ProfileContainer params={params} />
}
>>>>>>> feature
