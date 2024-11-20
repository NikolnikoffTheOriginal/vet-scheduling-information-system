import React from 'react'
import ReactDOM from 'react-dom/client'
import { Schedule } from './components/scheduling/Schedule.tsx'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Authentication } from './components/loginComponents.tsx/Authentication.tsx'
import { AdminDashboard } from './components/appointmentView/AdminDashboard.tsx'
import { VetDashboard } from './components/appointmentView/VetDashboard.tsx'
import { PrivacyPolicy } from './components/scheduling/PrivacyPolicy.tsx'

// for adminDashboard and vetDashboard add check for the correct credentials

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} /> 
        <Route path="/vetDashboard" element={<VetDashboard />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path="*" element={<Schedule />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
