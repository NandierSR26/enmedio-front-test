import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/characters" element={<h1>Characters Screen</h1>} />
      <Route path="/character/:id" element={<h1>Character Screen</h1>} />
    </Routes>
  )
}
