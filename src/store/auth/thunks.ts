import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { onLogin, onLogout } from "./authSlice"

export const startLogin = (username: string) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch( onLogin(username) )
    localStorage.setItem('username', username);
  }
}

export const startLogout = (username: string) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch( onLogout() )
    localStorage.clear()
  }
}

export const startcheckauth = () => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    const user = localStorage.getItem('username');

    if(!user) {
      dispatch( onLogout() )
      return
    }

    dispatch( onLogin(user!) )
  }
}