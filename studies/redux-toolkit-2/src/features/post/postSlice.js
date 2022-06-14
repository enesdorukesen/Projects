import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    userId: "1",
    title: "Learn redux-toolkit",
    content: "some basic structure",
  },
  {
    id: "2",
    userId: "2",
    title: "practice redux-toolkit",
    content: "some basic projects",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: {
      prepare(title, content, userId, date) {
        return {
          payload: {
            id: nanoid(),
            userId,
            title,
            content,
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    delPost: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.post;
export const { addPost, delPost } = postSlice.actions;

export default postSlice.reducer;
