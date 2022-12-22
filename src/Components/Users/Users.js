import s from "./Users.module.css";
import User from "./User/User";
import axios from "axios";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);


  }

componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUserOnPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
}

onPageChange(p) {
    this.props.setCurrentPage(p)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.countUserOnPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
}

  render() {

    let totalPages = Math.ceil(this.props.totalUsers / this.props.countUserOnPage)

    let pages = []
    for(let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
      <div>
        <h1>Users</h1>
        <div><p>Pages: </p>
        {
            pages.map(p => {
                return (
                    <span className={this.props.currentPage === p && s.activeLink} onClick={()=> {this.onPageChange(p)}}>{p} </span>
                )
            })
        }
        </div>
        
        <div className={s.block}>
          {this.props.users.map((u) => {
            return (
              <User
                key={u.id}
                user={u}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
