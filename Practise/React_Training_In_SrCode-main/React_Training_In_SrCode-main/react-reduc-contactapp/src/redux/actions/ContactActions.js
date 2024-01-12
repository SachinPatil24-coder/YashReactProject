import { ActionTypes } from "../constants/action-types";

export const addContact = (contact) => {
  return {
    type: ActionTypes.ADD_CONTACT,
    payload: contact,
  };
};

export const getContacts = (contacts) => {
  return {
    type: ActionTypes.GET_CONTACTS,
    payload: contacts,
  };
};
