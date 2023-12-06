import MichiContext from '../context/MichiContex'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MichiContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && (pathname === '/login' || pathname === '/register' || pathname === '/profile')
      ? <Navigate to='/' />
      : children
  )
}

export default PublicRoute
