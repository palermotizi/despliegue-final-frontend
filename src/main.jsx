import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './Context/GlobalContext.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter> 
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
)
