const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS = "SET-TOTAL-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

export let followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export let unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export let setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export let setTotalUsersActionCreator = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    }
}
export let setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

let initialState = {
    users: [
    ],
    currentPage: 1,
    totalUsers: 0,
    countUserOnPage: 100
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state
    }
}

export default usersReducer