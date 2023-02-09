import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import { reducer as formReducer } from "redux-form"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer"
import commonReducer from "./common-reducer"
import authReducer from "./auth-reducer"
import appReducer from "./app-reducer"
import thunk from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    common: commonReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

window._store_ = store

export default store