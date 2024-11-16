import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
import { ContextP } from './Component/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ContextP>  
    <App />
    </ContextP> 
    </BrowserRouter>

  </StrictMode>,
)
