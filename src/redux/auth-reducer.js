const SET_AUTH_DATA = "SET-AUTH-DATA";
const IS_AUTH_USER = "IS-AUTH-USER";

export let setAuthData = (userId, login, email) => {
  return {
    type: SET_AUTH_DATA,
    data: {userId, login, email}
  };
};

export let isAuthUser = (isAuth) => {
  return {
    type: IS_AUTH_USER,
    isAuth
  };
};

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data
      };
    case IS_AUTH_USER:
      return {
        ...state,
        isAuth: action.isAuth
      };
    default: {
      return { ...state };
    }
  }
};

export default authReducer;
