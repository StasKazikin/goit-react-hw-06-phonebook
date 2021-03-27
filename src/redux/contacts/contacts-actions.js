import types from "./contacts-types";

const addContact = (newContact) => ({
  type: types.ADD_CONTACT,
  payload: newContact,
});

const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const actions = { addContact, deleteContact, changeFilter };

export default actions;
