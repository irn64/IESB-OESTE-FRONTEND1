import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

interface PublicOnlyRouteProps {
  children: ReactNode
}

export function PublicOnlyRoute({
  children,
}: PublicOnlyRouteProps) {
  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to="/home" />
  }

  return children
}