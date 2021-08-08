const INITIAL_STATE = [];

//selector
export const employeesSelector = state => state.employeesState;
export const SET_EMPLOYEES = 'employees/set';
export const DELETE_EMPLOYEE = 'employee/delete';
export const CHANGE_ABSENCE = 'absence/change';
export const CHANGE_OTHOURS = 'othours/change';
export const CHANGE_ATTENDANCE = 'attendance/change';
export const setEmployees = employees => {
  return {
    type: SET_EMPLOYEES,
    payload: {
      employees,
    },
  };
};
export const changeAttendanceAction = (
  employeeid,
  date,
  worktype,
  attendance,
) => {
  return {
    type: CHANGE_ATTENDANCE,
    payload: {
      employeeid,
      date,
      worktype,
      attendance,
    },
  };
};
export const changeAbsence = (employeeid, date, status, worktype) => {
  console.log(employeeid, date, status);
  return {
    type: CHANGE_ABSENCE,
    payload: {
      employeeid,
      date,
      status,
      worktype,
    },
  };
};
export const changeOtHours = (employeeid, date, worktype, othours) => {
  return {
    type: CHANGE_OTHOURS,
    payload: {
      employeeid,
      date,
      worktype,
      othours,
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
      const newState = state.map(bigitem => {
        if (bigitem.title.toLowerCase() === action.payload.worktype) {
          const newbigitemdata = bigitem.data.map(item => {
            if (item.key === action.payload.employeeid) {
              if (item.attendance) {
                //console.log('we got some log');
                const newItem = {...item};
                newItem.attendance[action.payload.date] = {
                  status: action.payload.status,
                };
                return newItem;
              } else {
                //console.log('we got nop log');
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
          bigitem.data = newbigitemdata;
          return bigitem;
        } else return bigitem;
      });

      return newState;

    case CHANGE_ATTENDANCE:
      const newOTState = state.map(bigitem => {
        if (bigitem.title.toLowerCase() === action.payload.worktype) {
          const newbigitemdata = bigitem.data.map(item => {
            if (item.key === action.payload.employeeid) {
              if (item.attendance) {
                const newItem = {...item};
                newItem.attendance[action.payload.date] =
                  action.payload.attendance;

                return newItem;
              } else {
                const newItem = {
                  ...item,
                  attendance: {},
                };
                newItem.attendance[action.payload.date] =
                  action.payload.attendance;
                return newItem;
              }
            } else return item;
          });
          bigitem.data = newbigitemdata;
          return bigitem;
        } else return bigitem;
      });

      return newOTState;

    default:
      return state;
  }
};
