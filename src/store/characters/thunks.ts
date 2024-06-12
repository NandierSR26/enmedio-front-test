import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"
import { RootState, store } from "../store"
import { api } from "../../api"
import { deleteCharacter, getCharacterByID, getCharacters, onLoading, updateCharacter } from "./charactersSlice"
import { ICharacterstate } from "../../interfaces/character.interface"

const { characters } = api();

export const startGetCharacters = () => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {


    try {
      dispatch( onLoading() );
      const prevData = JSON.parse(localStorage.getItem('Characters') || '')
      if(prevData.length > 0) {
        dispatch( getCharacters(prevData) );
        return;
      }

      const { data } = await characters.getCharactersList();

      const characterData: ICharacterstate[] = data.characters.map(character => ({
        id: character.id,
        name: character.name,
        images: character.images
      }))

      localStorage.setItem('Characters', JSON.stringify(characterData));
      dispatch( getCharacters(characterData) );

    } catch (error) {
      console.log(error);
    }
  }
}

export const startGetCharacterByID = (id: number) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    try {
      dispatch( onLoading() )
      const {data} = await characters.getCharacterById(id);

      const characterData = {
        id: data.id,
        name: data.name,
        images: data.images
      }

      dispatch( getCharacterByID(characterData) )
    } catch (error) {
      console.log(error);
      
    }
  }
}

export const startUpdateCharacter = (dataValues: ICharacterstate) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch( updateCharacter(dataValues) );
    
    const { characters } = store.getState().characters
    localStorage.setItem('Characters', JSON.stringify(characters))

  }
}

export const startDeleteCharacter = (id: number) => {
  return async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch( deleteCharacter(id) );
    
    const { characters } = store.getState().characters
    localStorage.setItem('Characters', JSON.stringify(characters))

  }
}

