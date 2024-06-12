import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { onLogin, onLogout } from "./authSlice"

export const startLogin = (username: string) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    localStorage.setItem('username', username);
    dispatch(onLogin(username))
  }
}

export const startLogout = () => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch(onLogout())
    localStorage.clear()
  }
}

export const startcheckauth = () => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const user = localStorage.getItem('username');

    if (!user) {
      dispatch(onLogout())
      return
    }

    console.log({ user })
    dispatch(onLogin(user!))
  }
}