import { combineReducers } from "redux";
import INITIAL_STATE from "../../initial_state.json";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
// import types from "./contacts-types";

const items = createReducer([...INITIAL_STATE], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const items = (state = [...INITIAL_STATE], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       return [...state, payload];

//     case types.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
