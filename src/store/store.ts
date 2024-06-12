import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./characters/charactersSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    characters: charactersSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch