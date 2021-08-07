const INITIAL_STATE = [];

//selector
export const employeesSelector = state => state.employeesState;
export const SET_EMPLOYEES = 'employees/set';
export const DELETE_EMPLOYEE = 'employee/delete';
export const CHANGE_ABSENCE = 'absence/change';

export const setEmployees = employees => {
  return {
    type: SET_EMPLOYEES,
    payload: {
      employees,
    },
  };
};

export const changeAbsence = (employeeid, date, status) => {
  console.log(employeeid, date, status);
  return {
    type: CHANGE_ABSENCE,
    payload: {
      employeeid,
      date,
      status,
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
    case CHANGE_ABSENCE:
      const newState = state.map(item => {
        if (item.key === action.payload.employeeid) {
          if (item.attendance) {
            console.log('we got some log');
            const newItem = {...item};
            newItem.attendance[action.payload.date] = {
              status: action.payload.status,
            };
            return newItem;
          } else {
            console.log('we got nop log');
            const newItem = {
              ...item,
              attendance: {},
            };
            newItem.attendance[action.payload.date] = {
              status: action.payload.status,
            };
            return newItem;
          }
        } else return item;
      });

      return newState;

    default:
      return state;
  }
};
