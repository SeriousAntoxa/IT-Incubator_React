import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: "1", name: "Valera" },
                { id: "2", name: "Nikita" },
                { id: "3", name: "Elena" },
                { id: "4", name: "Maria" },
                { id: "5", name: "Andrei" },
            ],
            messages: [
                { id: "1", message: "Hello", who: 0 },
                { id: "1", message: "Hy", who: 1 },
                { id: "2", message: "Why are you?", who: 0 },
                { id: "3", message: "Thanks, and you?", who: 1 },
                { id: "3", message: "I'am finny!)", who: 0 },
                { id: "3", message: "Where are you from?", who: 0 },
            ],
            newMessage: "",
        },
        profilePage: {
            posts: [
                { id: "1", message: "some text post 1", likeCounter: 1 },
                { id: "2", message: "some text post 2", likeCounter: 21 },
                { id: "3", message: "some text post 3", likeCounter: 3 },
                { id: "4", message: "some text post 4", likeCounter: 6 },
            ],
            newPost: "",
        },
        sidebar: {
            friends: [
                { id: "1", name: "Elena" },
                { id: "2", name: "Maria" },
                { id: "3", name: "Andrei" },
            ],
        },
    },

    _renderTree() {},

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        )
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        )
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._renderTree(this._state)
    },

    subscribe(observe) {
        this._renderTree = observe
    },
}

export default store
