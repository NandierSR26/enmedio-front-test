import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxFunctions"
import { startGetCharacterByID, startGetCharacters, startUpdateCharacter } from "../../../store/characters/thunks";
import { ICharacterstate } from "../../../interfaces/character.interface";

export const useContainer = () => {

  const state = useAppSelector((state) => ({
    characterByID: state.characters.characterByID,
    isLoading: state.characters.isLoading
  }))

  const dispatch = useAppDispatch();

  const getCharacterByID = useCallback((id: number) => {
    dispatch(startGetCharacterByID(id))
  }, [dispatch])

  const editCharacter = useCallback((character: ICharacterstate) => {
    dispatch( startUpdateCharacter(character) )
  }, [dispatch])

  const dispatchFn = {
    getCharacterByID,
    editCharacter
  }

  return {
    state,
    dispatchFn
  }

}