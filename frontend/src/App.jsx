import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute } from './routes'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx'
import Carrito from './views/Carrito.jsx'
import Login from './views/Login'
import Profile from './views/Profile.jsx'
import Register from './views/Register'
import Product from './views/Product.jsx'
import NewProduct from './views/NewProduct'
import NotFound from './views/NotFound'
import Thanks from './views/Thanks.jsx'
import MichiContext from './context/MichiContex.jsx'
import { useCart } from './hooks/useCart.jsx'

function App () {
  const allState = useCart()

  return (
    <MichiContext.Provider value={allState}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path='/'
            element={<PublicRoute> <Home /></PublicRoute>}
          />
          <Route
            path='/carrito'
            element={<PrivateRoute><Carrito /></PrivateRoute>}
          />
          <Route
            path='/login'
            element={<PublicRoute><Login /></PublicRoute>}
          />
          <Route
            path='/register'
            element={<PublicRoute><Register /></PublicRoute>}
          />
          <Route
            path='/product/:id'
            element={<PublicRoute><Product /></PublicRoute>}
          />
          <Route
            path='/newproduct'
            element={<PrivateRoute><NewProduct /></PrivateRoute>}
          />
          <Route
            path='/profile'
            element={<PrivateRoute><Profile /></PrivateRoute>}
          />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MichiContext.Provider>
  )
}

export default App
