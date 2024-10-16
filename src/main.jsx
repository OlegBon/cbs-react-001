import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyTxt from './components/MyTxt.jsx'
import MyImg from './components/MyImg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyImg />
    <MyTxt />
  </StrictMode>,
)
