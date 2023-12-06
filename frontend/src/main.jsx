import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
// import { worker } from '../__mocks__/browser.js'

/* if (process.env.NODE_ENV === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' })
} */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
