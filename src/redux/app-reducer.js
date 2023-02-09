import { getAuthUserData } from "./auth-reducer"

const INITIALIZED_SUCCESS = "socialNetwork/app/INITIALIZED-SUCCESS"

let initialState = {
initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default: {
            return { ...state }
        }
    }
}

export default appReducer

export let initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const initialize = () => {
    return (dispatch) => {
       let promise = dispatch(getAuthUserData())
       promise.then(()=>{
        dispatch(initializedSuccess())
       })
    }
}
