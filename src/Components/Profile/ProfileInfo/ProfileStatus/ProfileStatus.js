import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  enableEditMode = () => {   
    this.setState({
      editMode: true
    });
  };

  disableEditMode = (e) => {
    this.setState({
      editMode: false,
      status: e.target.value
    });
    this.props.updateStatus(e.target.value)
  };



  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.enableEditMode}>{this.props.status || "dont status"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.disableEditMode} defaultValue={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
