import { toggleIsFetching } from "./common-reducer"
import { usersAPI } from "./../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const TOGGLE_IS_FOLLOWING = "TOGGLE-IS-FOLLOWING"

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
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(countUserOnPage, page).then((data) => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsers(data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.followUsers(userId).then((userId) => {
            dispatch(setFollow(userId))
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.unfollowUsers(userId).then((userId) => {
            dispatch(setUnfollow(userId))
            dispatch(toggleIsFollowing(false, userId))
        })
    }
}
