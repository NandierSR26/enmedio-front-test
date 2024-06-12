import { useAppSelector } from "../../hooks/useReduxFunctions"

export const useContainer = () => {
  const state = useAppSelector((state) => ({
    status: state.auth.status
  }))

  return {
    state
  }
}