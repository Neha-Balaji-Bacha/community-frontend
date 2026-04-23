import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    setUserDetails: (state, action) => {
      if (!action.payload) {

        state.user = null;
        state.isLoggedIn = false;
      } else {
  
        state.user = action.payload;
        state.isLoggedIn = true;
      }
      state.isLoading = false;
    },

    makeHost: (state) => {
      if (state.user) {
        state.user = { ...state.user, role: "host" };
      }
    },
  },
});

export const {
  login,
  logout,
  makeHost,
  setUserDetails,
  setLoading,
} = authSlice.actions;

export default authSlice.reducer;