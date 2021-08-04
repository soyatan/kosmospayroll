const INITIAL_STATE = false;

//selector
export const loadingSelector = state => state.loadingState;
export const SET_LOADING = 'loading/set';

export const setLoading = status => {
  return {
    type: SET_LOADING,
    payload: {
      status,
    },
  };
};

export const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload.status;

    default:
      return state;
  }
};
