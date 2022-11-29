import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // todos: todosReducer
    // to use multiple reducer we can combine them up.
  },
});

export default store;
