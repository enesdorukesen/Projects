import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};
const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: [],
});

export const schools = (state) => state.schools;

export default schoolsSlice.reducer;
