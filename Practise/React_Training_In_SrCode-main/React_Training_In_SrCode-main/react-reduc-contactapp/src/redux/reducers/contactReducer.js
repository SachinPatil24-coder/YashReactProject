import { ActionTypes } from "./../constants/action-types";
const initialState = {
  contacts: [
    {
      id: "101",
      name: "pankaj sharma",
      phone: "8827611875",
      email: "pankajsimmc@gmail.com",
      group: "family",
    },
    {
      id: "102",
      name: "priyansh sharma",
      phone: "8827611875",
      email: "priyansh@gmail.com",
      group: "family",
    },
    {
      id: "103",
      name: "manvi sharma",
      phone: "8827611875",
      email: "manvi@gmail.com",
      group: "family",
    },
    {
      id: "104",
      name: "Neeraj sharma",
      phone: "8827611875",
      email: "neeraj@gmail.com",
      group: "family",
    },
  ],
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ActionTypes.ADD_CONTACT:
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};
