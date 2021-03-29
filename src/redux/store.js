// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export default store;
