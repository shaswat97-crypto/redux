import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
// const initialState = [
//   {
//     id: "0",
//     name: "Dud Leb",
//   },
//   {
//     id: "1",
//     name: "Nel Yon",
//   },
//   {
//     id: "2",
//     name: "Deva Gee",
//   },
// ];
const initialState = [];
export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
  const res = await axios.get(USERS_URL);
  return res.data;
})
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //actions
  },
  extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      //async thunk se jo data return hua vo action ke payload me aaya
      return action.payload;
    })
  }
});

export default usersSlice.reducer;
export const selectAllUsers = (state) => state.users;
