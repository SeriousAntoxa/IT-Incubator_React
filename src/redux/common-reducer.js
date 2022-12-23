const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

export let toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};

let initialState = {
  isFetching: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default: {
      return { ...state };
    }
  }
};

export default commonReducer;
