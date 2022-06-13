import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    userId: 1,
    title: "Learn redux-toolkit",
    content: "some basic structure",
    // date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    userId: 2,
    title: "practice redux-toolkit",
    content: "some basic projects",
    // date: sub(new Date(), { minutes: 5 }).toISOString(),
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
            id: parseInt(nanoid()),
            userId,
            title,
            content,
            // date: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectAllPosts = (state) => state.post;
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
