import { toggleIsFetching } from "./common-reducer"
import { usersAPI } from "./../api/api"

const FOLLOW = "socialNetwork/users/FOLLOW"
const UNFOLLOW = "socialNetwork/users/UNFOLLOW"
const SET_USERS = "socialNetwork/users/SET-USERS"
const SET_TOTAL_USERS = "socialNetwork/users/SET-TOTAL-USERS"
const SET_CURRENT_PAGE = "socialNetwork/users/SET-CURRENT-PAGE"
const TOGGLE_IS_FOLLOWING = "socialNetwork/users/TOGGLE-IS-FOLLOWING"

let initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    countUserOnPage: 100,
    isFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    return u
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                isFollowing: action.isFetching
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter((id) => id !== action.userId),
            }
        }
        default:
            return { ...state }
    }
}

export default usersReducer

export let setFollow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    }
}

export let setUnfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}

export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export let setTotalUsers = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers,
    }
}

export let setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export let toggleIsFollowing = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        userId,
    }
}

//ThunkCreator
export const requestUsers = (countUserOnPage, page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await usersAPI.getUsers(countUserOnPage, page)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsers(response.data.totalCount))
        dispatch(toggleIsFetching(false))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        let response = await usersAPI.followUsers(userId)

        if (response.data.resultCode === 0) {
            dispatch(setFollow(userId))
        }

        dispatch(toggleIsFollowing(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        let response = await usersAPI.unfollowUsers(userId)

        if (response.data.resultCode === 0) {
            dispatch(setUnfollow(userId))
        }

        dispatch(toggleIsFollowing(false, userId))
    }
}
