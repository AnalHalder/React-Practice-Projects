import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CryptoContextProvider from './contexts/CryptoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CryptoContextProvider>
        <App />
      </CryptoContextProvider>
  </React.StrictMode>
)
