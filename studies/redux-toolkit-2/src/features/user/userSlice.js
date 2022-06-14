import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "jhon Doe" },
  { id: "2", name: "jane Doe" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: {
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllUsers = (state) => state.user;
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
