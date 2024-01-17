import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/index.tsx'
import Login from './pages/login.tsx'
import Signup from './pages/signup.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
