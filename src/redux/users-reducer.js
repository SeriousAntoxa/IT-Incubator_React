const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

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

let initialState = {
    users: [
    ]
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
        default:
            return state
    }
}

export default usersReducer