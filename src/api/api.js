import axios from "axios"

const instants = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "9a18a34d-8ece-4542-91d5-deb842c499ad",
    },
})

export const usersAPI = {
    getUsers(countItemsPerPage, page) {
        return instants.get(`users?page=${page}&count=${countItemsPerPage}`)
    },
    followUsers(userId) {
        return instants.post(`follow/${userId}`)
    },
    unfollowUsers(userId) {
        return instants.delete(`follow/${userId}`)
    },
}

export const authAPI = {
    auth() {
        return instants.get(`auth/me`)
    },
    login(email, password, rememberMe, captcha) {
        return instants.post(`auth/login`, { email, password, rememberMe, captcha })
    },
    logout() {
        return instants.delete(`auth/login`)
    },
    getCaptchaUrl() {
        return instants.get(`security/get-captcha-url`)
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
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append("image", photoFile)

        return instants.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
    saveProfile(profile) {
        return instants.put(`profile`, profile)       
    },
}
