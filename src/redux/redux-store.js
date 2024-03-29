<<<<<<< HEAD
import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import commonReducer from './common-reducer'
import authReducer from './auth-reducer'
=======
import { applyMiddleware, combineReducers, createStore } from "redux"
import { reducer as formReducer } from "redux-form"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import commonReducer from "./common-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"
import thunk from "redux-thunk"
>>>>>>> feature

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    common: commonReducer,
<<<<<<< HEAD
    auth: authReducer
=======
    auth: authReducer,
    form: formReducer,
    app: appReducer,
>>>>>>> feature
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

window.store = store

export default store