import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setReduxUser: (state, action) => {
      state.value = action.payload;
    },
    logoutReduxUser: (state) => {
      state.value = null;
      localStorage.clear();
    },
  },
});

export const { setReduxUser, logoutReduxUser } = userSlice.actions;

export default userSlice.reducer;
