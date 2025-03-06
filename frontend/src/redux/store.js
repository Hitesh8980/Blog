import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import contactReducer from "./contactSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    contact: contactReducer,
  },
});

export default store;
