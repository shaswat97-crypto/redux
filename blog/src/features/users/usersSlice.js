import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "0",
    name: "Dud Leb",
  },
  {
    id: "1",
    name: "Nel Yon",
  },
  {
    id: "2",
    name: "Deva Gee",
  },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //actions
  },
});

export default usersSlice.reducer;
export const selectAllUsers = (state) => state.users;
