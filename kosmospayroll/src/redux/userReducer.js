const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userId: null,
  loginType: null,
  userName: null,
  popCoin: 0,
  ownedBoards: [],
};

//selector
export const userSelector = state => state.userState;

export const SET_USER = 'user/set';
export const SET_ERROR = 'error/set';
export const SET_USERANDERROR = 'error&user/set';
export const SET_USER_REQUEST = 'user/set/request';
export const SIGNOUT_REQUEST = 'signout/request';
export const SIGNOUT = 'signout';
export const PURCHASE_REQUEST = 'board/buy/request';
export const SET_BOARDS = 'boards/set';
export const UPDATE_USER_REQUEST = 'user/update';
export const MERGE_COINS_REQUEST = 'coins/merge/request';
export const SET_COINS = 'coins/set';
export const setUser = (userName, userId, loginType) => {
  return {
    type: SET_USER,
    payload: {
      userName,
      userId,
      loginType,
    },
  };
};

export const setUserRequest = (userName, userId, loginType) => {
  return {
    type: SET_USER_REQUEST,
    payload: {
      userName,
      userId,
      loginType,
    },
  };
};

export const setError = errorMessage => {
  return {
    type: SET_ERROR,
    payload: {
      errorMessage,
    },
  };
};

export const setCoins = coins => {
  return {
    type: SET_COINS,
    payload: {
      coins,
    },
  };
};

export const mergeCoinsRequest = () => {
  return {
    type: MERGE_COINS_REQUEST,
  };
};

export const setUserAndError = (
  userName,
  userId,
  errorMessage,
  loginType,
  popCoin,
  ownedBoards,
) => {
  return {
    type: SET_USERANDERROR,
    payload: {
      userName,
      userId,
      errorMessage,
      loginType,
      popCoin,
      ownedBoards,
    },
  };
};
export const signOutRequest = () => {
  return {
    type: SIGNOUT_REQUEST,
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
    case SET_USER:
      return {
        ...state,
        loginType: action.payload.loginType,
        userId: action.payload.userId,
        userName: action.payload.userName,
        isLoggedIn: true,
      };
    case SET_ERROR:
      return {...state, errorMessage: action.payload.errorMessage};
    case SET_USERANDERROR:
      return {...action.payload, isLoggedIn: true};
    case SIGNOUT:
      return {
        errorMessage: null,
        isLoggedIn: false,
        userId: null,
        loginType: null,
        userName: null,
        popCoin: 0,
        ownedBoards: [],
      };

    case SET_COINS:
      return {...state, popCoin: action.payload.coins};
    case SET_BOARDS:
      return {...state, ownedBoards: action.payload.boards};

    default:
      return state;
  }
};
