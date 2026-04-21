import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import communityReducer from "./slices/communitySlice";
import eventReducer from "./slices/eventSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        event: eventReducer,
        community: communityReducer
    }
});

