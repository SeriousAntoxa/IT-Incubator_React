import s from "./Users.module.css";
import User from "./User/User";
import axios from "axios";
import React from "react";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });

      {
        /*props.setUsers([
              {
                id: 1,
                photoUrl:
                  "https://get.wallhere.com/photo/face-black-model-portrait-photography-actor-hair-nose-Person-skin-head-Tobey-Maguire-beauty-smile-eye-man-guy-male-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-close-up-717923.jpg",
                name: {
                  firstName: "Anton",
                  lastName: "Podobed",
                },
                status: "Hi, i am finny today",
                followed: true,
                location: {
                  country: "Belarus",
                  city: "Mogilev",
                },
              },
              {
                id: 2,
                photoUrl:
                  "https://fikiwiki.com/uploads/posts/2022-02/1645006685_18-fikiwiki-com-p-kartinki-schastlivikh-lyudei-18.jpg",
                name: {
                  firstName: "Nikita",
                  lastName: "Teresh",
                },
                status: "Hi, i am finny too",
                followed: false,
                location: {
                  country: "Belarus",
                  city: "Minsk",
                },
              },
              {
                id: 3,
                photoUrl:
                  "https://c.wallhere.com/photos/a0/1c/johannes_strate_skarf_man_face_field-776717.jpg!d",
                name: {
                  firstName: "Oleg",
                  lastName: "Petrov",
                },
                status: "Where is it?",
                followed: false,
                location: {
                  country: "Russian",
                  city: "Moscow",
                },
              },
              {
                id: 4,
                photoUrl:
                  "https://get.pxhere.com/photo/outdoor-person-girl-sun-woman-hair-white-photography-cute-summer-female-portrait-model-young-red-fashion-lady-facial-expression-hairstyle-smiling-smile-long-hair-close-up-caucasian-face-dress-happy-happiness-eye-head-skin-beauty-attractive-photo-shoot-pretty-girl-brown-hair-cute-girl-happy-girl-happy-woman-portrait-photography-supermodel-683657.jpg",
                name: {
                  firstName: "Inga",
                  lastName: "Spyvachka",
                },
                status: "I am a girl)",
                followed: true,
                location: {
                  country: "Poland",
                  city: "Krakow",
                },
              },
              {
                id: 5,
                photoUrl:
                  "https://get.pxhere.com/photo/person-girl-woman-hair-photography-portrait-model-romance-long-hair-dress-photograph-beauty-pretty-posture-photo-shoot-brown-hair-portrait-photography-769830.jpg",
                name: {
                  firstName: "Ekaterina",
                  lastName: "Podobed",
                },
                status: "I love my boy!",
                followed: true,
                location: {
                  country: "Belarus",
                  city: "Mogilev",
                },
              },
            ]);*/
      }
    }
  };

  render() {
    return (
      <div>
        {this.getUsers()}
        <h1>Users</h1>
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
