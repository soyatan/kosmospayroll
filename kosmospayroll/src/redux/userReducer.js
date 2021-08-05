const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userid: null,
  loginType: null,
  username: null,
  email: null,
  currency: null,
};

//selector
export const userSelector = state => state.userState;
export const SET_USERANDERROR = 'error&user/set';
export const SET_ERROR = 'error/set';

export const SET_USER_REQUEST = 'user/set/request';
export const SIGNOUT_REQUEST = 'signout/request';
export const SIGNOUT = 'signout';

export const setError = errorMessage => {
  return {
    type: SET_ERROR,
    payload: {
      errorMessage,
    },
  };
};

export const setUserAndError = (
  username,
  userid,
  email,
  currency,
  errorMessage,
  loginType,
) => {
  return {
    type: SET_USERANDERROR,
    payload: {
      username,
      userid,
      email,
      currency,
      errorMessage,
      loginType,
    },
  };
};

export const signOutAction = () => {
  return {
    type: SIGNOUT,
  };
};
export const purchaseBoardRequest = id => {
  return {
    type: PURCHASE_REQUEST,
    payload: {
      id,
    },
  };
};
export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};
export const setBoards = boards => {
  return {
    type: SET_BOARDS,
    payload: {
      boards,
    },
  };
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {...state, errorMessage: action.payload.errorMessage};
    case SET_USERANDERROR:
      return {...action.payload, isLoggedIn: true};
    case SIGNOUT:
      return {
        errorMessage: null,
        isLoggedIn: false,
        userid: null,
        loginType: null,
        username: null,
        email: null,
        currency: null,
      };

    default:
      return state;
  }
};
