export const getUsers = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
}

export const getCountItemsPerPage = (state) => {
    return state.usersPage.countItemsPerPage
}

export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}

export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}
