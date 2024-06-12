import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { api } from "../../api"
import { getCharacters, onLoading } from "./charactersSlice"

export const startGetCharacters = () => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {

    const { characters } = api();

    try {
      dispatch( onLoading() );
      const { data } = await characters.getCharactersList();
      dispatch( getCharacters(data.characters) );

    } catch (error) {
      console.log(error);
    }
  }
}