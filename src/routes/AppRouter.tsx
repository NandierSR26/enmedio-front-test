import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { CharactersPage, EditCharacter } from '../pages'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useAppDispatch } from '../hooks/useReduxFunctions'
import { startcheckauth } from '../store/auth/thunks'
import { useEffect } from 'react'

export const AppRouter = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch( startcheckauth() )
  }, [])

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/character/:id" element={<EditCharacter />} />
        <Route path='*' element={<Navigate to={'/characters'} />} />

      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path='*' element={<Navigate to={'/login'} />} />
      </Route>

      <Route path='*' element={<Navigate to={'/login'} />} />

    </Routes>
  )
}
