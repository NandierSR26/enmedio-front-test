import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxFunctions"
import { startDeleteCharacter, startGetCharacters } from "../../../store/characters/thunks";

export const useContainer = () => {

  const state = useAppSelector((state) => ({
    characters: state.characters.characters
  }))

  const dispatch = useAppDispatch();

  const getCharacters = useCallback(() => {
    dispatch(startGetCharacters())
  }, [dispatch])

  const deleteCharacter = useCallback((id: number) => {
    dispatch( startDeleteCharacter(id) )
  }, [dispatch])

  const dispatchFn = {
    getCharacters,
    deleteCharacter
  }

  return {
    state,
    dispatchFn
  }

}