import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})



////////////////////////// if more reducer than 1

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer1 from "./../features/counter/counterSlice1";
// import counterReducer2 from "./../features/counter/counterSlice2";

// import { combineReducers } from "redux";

// const reducer = combineReducers({
//   // put all your reducers here!
//   counterReducer1,
//   counterReducer2,
// });

// export const store = configureStore({
//   reducer,
// });