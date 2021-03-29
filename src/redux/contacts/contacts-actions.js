// import types from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";

// const addContact = (newContact) => ({
//   type: types.ADD_CONTACT,
//   payload: newContact,
// });

const addContact = createAction("contacts/addContact");

// const deleteContact = (contactId) => ({
//   type: types.DELETE_CONTACT,
//   payload: contactId,
// });

const deleteContact = createAction("contacts/deleteContact");

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const changeFilter = createAction("contacts/changeFilter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
