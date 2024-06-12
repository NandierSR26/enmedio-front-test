import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxFunctions"
import { startGetCharacters } from "../../../store/characters/thunks";

export const useContainer = () => {

  const state = useAppSelector((state) => ({
    characters: state.characters.characters
  }))

  const dispatch = useAppDispatch();

  const getCharacters = useCallback(() => {
    dispatch(startGetCharacters())
  }, [dispatch])

  const dispatchFn = {
    getCharacters
  }

  return {
    state,
    dispatchFn
  }

}