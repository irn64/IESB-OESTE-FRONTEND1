import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../../pages/Login'

import { ProtectedRoute } from '../../components/ProtectedRoute'
import { PublicOnlyRoute } from '../../components/PublicOnlyRoute'

import { Home } from '../../pages/Home'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}