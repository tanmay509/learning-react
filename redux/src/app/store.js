import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feateres/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer
});