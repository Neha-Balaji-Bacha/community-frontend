// import { createSlice } from "@reduxjs/toolkit";
 
// const initialState = {
//   user: null,
//   isLoggedIn: false,
//   isLoading: false
// };

// // action.payload.user - incoming data from UI
// // state.user - stored data in Redux

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//         // If reducer needs input : use action
//     login: (state,action) => {
// state.user = { ...action.payload.user };
//        state.isLoggedIn = true;
//   state.isLoading = false;
//     },
//     logout: (state) => {
//       state.user = null;
//        state.isLoggedIn = false;
//   state.isLoading = false;
//     },
// setUserDetails: (state, action) => {
//   state.user = {
//     ...state.user,        // keep old data
//     ...action.payload     // update new data
//   };
//   state.isLoggedIn = true;
//   state.isLoading = false;
// },
//     // If reducer just updates existing state : no action needed
//     //here user is already loggedin so need of input
//     makeHost: (state) => {
//       if(state.user){
//        state.user = { ...state.user, role: "host" };
//       }
//     }
//   }
// });
// export const { login, logout, makeHost,setUserDetails, setLoading } = authSlice.actions;
// export default authSlice.reducer;

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

    // 🔄 loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    // ✅ login
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    // ✅ logout (clear everything)
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    // 🔥 FIXED: handles both login + logout properly
    setUserDetails: (state, action) => {
      if (!action.payload) {
        // 👉 logout / no user
        state.user = null;
        state.isLoggedIn = false;
      } else {
        // 👉 user exists
        state.user = action.payload;
        state.isLoggedIn = true;
      }
      state.isLoading = false;
    },

    // ✅ upgrade role
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