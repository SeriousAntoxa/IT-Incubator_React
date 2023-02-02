export const getUsers = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers
}

export const getCountUserOnPage = (state) => {
    return state.usersPage.countUserOnPage
}

export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}
