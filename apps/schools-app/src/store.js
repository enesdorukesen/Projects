import { configureStore } from "@reduxjs/toolkit";
import schoolsReducer from "./schoolsSlice";

const store = configureStore({
  reducer: { schools: schoolsReducer },
});

export default store;
