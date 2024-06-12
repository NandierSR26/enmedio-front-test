import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../interfaces/character.interface";

interface InitialState {
  isLoading: boolean
  characters: Character[];
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    isLoading: false,
    characters: [],
  } as InitialState,
  reducers: {
    getCharacters: (state, { payload }:PayloadAction<Character[]>) => {
      state.characters = payload
      state.isLoading = false
    },
    onLoading: (state) => {
      state.isLoading = true
    }
  }
})

export const { getCharacters, onLoading } = charactersSlice.actions