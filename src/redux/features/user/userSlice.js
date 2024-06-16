import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userName: "Mir Hussain",
    email: "mir@gmail.com",
  },
  reducer: {},
});

export default userSlice.reducer;
