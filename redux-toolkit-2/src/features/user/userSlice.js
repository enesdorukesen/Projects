import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "jhon Doe" },
  { id: 2, name: "jane Doe" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
