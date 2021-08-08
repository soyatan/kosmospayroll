const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userid: null,
  loginType: null,
  username: null,
  email: null,
  currency: null,
  company: null,
  workhours: null,
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
  company,
  workhours,
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
      company,
      workhours,
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
        company: null,
        workhours: null,
      };

    default:
      return state;
  }
};
