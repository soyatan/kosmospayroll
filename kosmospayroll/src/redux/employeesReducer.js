const INITIAL_STATE = {
  errorMessage: null,
  isLoggedIn: false,
  userid: null,
  loginType: null,
  username: null,
  email: null,
};

//selector
export const employeesSelector = state => state.employeesState;
export const SET_EMPLOYEES = 'employees/set';
export const DELETE_EMPLOYEE = 'employee/delete';

export const setEmployees = employees => {
  return {
    type: SET_EMPLOYEES,
    payload: {
      employees,
    },
  };
};
export const deleteEmployee = employee => {
  return {
    type: DELETE_EMPLOYEE,
    payload: {
      employee,
    },
  };
};

export const employeesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return action.payload.employees;
    case DELETE_EMPLOYEE:
      return state.filter(emp => emp.id !== action.payload.employee);

    default:
      return state;
  }
};
