import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { CharactersPage } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<h1>Character Screen</h1>} />
    </Routes>
  )
}
