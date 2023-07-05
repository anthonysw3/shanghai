import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user_id: "",
  },
  reducers: {
    // Define your actions and reducers here
    setUserID: (state, action) => {
      state.user_id = action.payload;
    },
  },
});

export const { setUserID } = userSlice.actions;

export default userSlice.reducer;
