import { Navigate, useLocation } from 'react-router-dom'
import MichiContext from '../context/MichiContex'
import { useContext } from 'react'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(MichiContext)
  const { pathname } = useLocation()
  return (
    isAuthenticated && pathname !== '/login' && pathname !== '/register'
      ? children
      : <Navigate to='/' />
  )
}

export default PrivateRoute
