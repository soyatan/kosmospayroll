const INITIAL_STATE = null;

//selector
export const employeeNameSelector = state => state.employeeNameState;
export const SET_EMP_INFO = 'empinfo/set';

export const setEmpChosen = employee => {
  return {
    type: SET_EMP_INFO,
    payload: {
      employee,
    },
  };
};

export const employeeNameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EMP_INFO:
      return action.payload.employee;

    default:
      return state;
  }
};
