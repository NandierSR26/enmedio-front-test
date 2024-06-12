import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character, ICharacterstate } from "../../interfaces/character.interface";

interface InitialState {
  isLoading: boolean
  characters: ICharacterstate[];
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    isLoading: false,
    characters: [],
  } as InitialState,
  reducers: {
    getCharacters: (state, { payload }:PayloadAction<ICharacterstate[]>) => {
      state.characters = payload
      state.isLoading = false
    },
    updateCharacter: (state, {payload}: PayloadAction<ICharacterstate>) => {
      state.characters = state.characters.map(character => {
        if(character.id === payload.id) return payload
        return character
      })
    },
    onLoading: (state) => {
      state.isLoading = true
    }
  }
})

export const { getCharacters, onLoading, updateCharacter } = charactersSlice.actions