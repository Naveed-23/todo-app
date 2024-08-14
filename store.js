import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./src/features/todo/TodoSlice";

const store = configureStore({
    reducer: {
        Todo: TodoReducer,
    }
})

export default store;

