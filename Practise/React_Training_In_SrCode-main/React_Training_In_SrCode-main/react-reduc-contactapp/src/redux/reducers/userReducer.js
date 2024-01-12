import { ActionTypes } from "./../constants/action-types";
const initialState = {
  contacts: [
    {
      id: "101",
      name: "Vijay sharma",
      phone: "8827611875",
      email: "vijay@gmail.com",
      group: "family",
    },
    {
      id: "102",
      name: "aman sharma",
      phone: "8827611875",
      email: "aman@gmail.com",
      group: "family",
    },
  ],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return { ...state, users: action.payload };
    case ActionTypes.ADD_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
