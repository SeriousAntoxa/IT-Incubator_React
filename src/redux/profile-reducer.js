import { profileAPI } from "./../api/api"

const ADD_POST = "socialNetwork/profile/ADD-POST"
const SET_USER_PROFILE = "socialNetwork/profile/SET-USER-PROFILE"
const SET_USER_STATUS = "socialNetwork/profile/SET-USER-STATUS"

let initialState = {
    posts: [
        { id: "1", message: "some text post 1", likeCounter: 1 },
        { id: "2", message: "some text post 2", likeCounter: 21 },
        { id: "3", message: "some text post 3", likeCounter: 3 },
        { id: "4", message: "some text post 4", likeCounter: 6 },
    ],
    profile: null,
    status: "no status",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let postData = {
                id: "5",
                message: action.newPost,
                likeCounter: 0,
            }
            return {
                ...state,
                posts: [...state.posts, postData],
                newPost: "",
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return { ...state }
    }
}

export default profileReducer

export let addPost = (newPost) => ({ type: ADD_POST, newPost })

export let setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

export let setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status,
})

//ThunkCreator
export const getUser = (userId) => {
    //redux-thunk -->
    return async (dispatch) => {
        let response = await profileAPI.getUser(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        await profileAPI.updateStatus(status)
        dispatch(setUserStatus(status))
    }
}
