import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login Screen</h1>} />
      <Route path="/characters" element={<h1>Characters Screen</h1>} />
      <Route path="/character/:id" element={<h1>Character Screen</h1>} />
    </Routes>
  )
}
