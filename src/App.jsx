import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Landing from "./tujiinue/landing"
import { NotificationProvider } from './tujiinue/notificationContext'

function App() {

  return (
    <NotificationProvider>
      <Landing/>  
    </NotificationProvider>
  )
}

export default App
