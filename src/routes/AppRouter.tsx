import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<h1>Login Screen</h1>} />
      <Route path="/dogs" element={<h1>Dogs Screen</h1>} />
      <Route path="/dog/:id" element={<h1>Dog Screen</h1>} />
    </Routes>
  )
}
