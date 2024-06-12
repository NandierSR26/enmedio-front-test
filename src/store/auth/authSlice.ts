import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    username: ''
  },
  reducers: {
    onLogin: (state, {payload}: PayloadAction<string>) => {
      state.status = 'authenticated'
      state.username = payload
    },
    onLogout: (state) => {
      state.status = 'not-authenticated'
    },
  }
})

export const { onLogin, onLogout } = authSlice.actions