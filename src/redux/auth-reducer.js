import { toggleIsFetching } from "./common-reducer"
import { authAPI } from "./../api/api"

const SET_AUTH_DATA = "SET-AUTH-DATA"
const IS_AUTH_USER = "IS-AUTH-USER"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
            }
        case IS_AUTH_USER:
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default: {
            return { ...state }
        }
    }
}

export default authReducer

export let setAuthData = (userId, login, email) => {
    return {
        type: SET_AUTH_DATA,
        data: { userId, login, email },
    }
}

export let isAuthUser = (isAuth) => {
    return {
        type: IS_AUTH_USER,
        isAuth,
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.auth().then((response) => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                dispatch(setAuthData(id, login, email))
                dispatch(isAuthUser(true))
            }
            dispatch(toggleIsFetching(false))
        })
    }
}
