import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/Homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HomePage />
  </StrictMode>,
)
