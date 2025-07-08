import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoutedApp from './App.jsx' // Changed to import RoutedApp

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutedApp /> {/* Changed to render RoutedApp */}
  </StrictMode>,
)
