import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/login.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <App />
  </StrictMode>,
)
