import React from 'react'
import ReactDOM from 'react-dom/client'
import Schedule from './Schedule.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="*" element={<Schedule />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
