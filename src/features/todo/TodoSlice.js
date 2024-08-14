import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    initialState: false,
    name: 'MarkTodo',
    reducers: {
        marker: (state) => !state
    },
});

export const { marker } = TodoSlice.actions;
export default TodoSlice.reducer;