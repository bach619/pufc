import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const initialPage = rootElement?.dataset?.page || 'home'

hydrateRoot(
  rootElement,
  <StrictMode>
    <App initialPage={initialPage} />
  </StrictMode>,
)
