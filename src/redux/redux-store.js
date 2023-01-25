import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import commonReducer from "./common-reducer"
import authReducer from "./auth-reducer"
import thunk from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    common: commonReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store