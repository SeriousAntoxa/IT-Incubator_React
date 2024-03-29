<<<<<<< HEAD
import axios from "axios";

const instants = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9a18a34d-8ece-4542-91d5-deb842c499ad",
  },
});

export const usersAPI = {
  getUsers(countUserOnPage, p = 1) {
    return instants
      .get(`users?page=${p}&count=${countUserOnPage}`)
      .then((response) => response.data);
  },
  followUsers(userId) {
    return instants
    .post(`follow/${userId}`)
    .then((response) => {
      if (response.data.resultCode === 0) {
        return userId;
      }
    });
  },
  unfollowUsers(userId) {
    return instants
    .delete(`follow/${userId}`)
    .then((response) => {
      if (response.data.resultCode === 0) {
        return userId;
      }
    });
  },
};

export const authAPI = {
    auth() {
      return instants
        .get(`auth/me`)
        .then((response) => response);
    },
};

export const profileAPI = {
    getUser(userId) {
        return instants
          .get(`profile/${userId}`)
          .then((response) => response);
      },
}
=======
import axios from "axios"

const instants = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "9a18a34d-8ece-4542-91d5-deb842c499ad",
    },
})

export const usersAPI = {
    getUsers(countUserOnPage, page) {
        return instants
            .get(`users?page=${page}&count=${countUserOnPage}`)
            .then((response) => response.data)
    },
    followUsers(userId) {
        return instants.post(`follow/${userId}`).then((response) => {
            if (response.data.resultCode === 0) {
                return userId
            }
        })
    },
    unfollowUsers(userId) {
        return instants.delete(`follow/${userId}`).then((response) => {
            if (response.data.resultCode === 0) {
                return userId
            }
        })
    },
}

export const authAPI = {
    auth() {
        return instants.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instants.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instants.delete(`auth/login`)
    },
}

export const profileAPI = {
    getUser(userId) {
        return instants.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instants.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instants.put(`profile/status`, { status })
    },
}
>>>>>>> feature
