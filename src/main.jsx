import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Use hydrateRoot when SSR HTML is already present (production build),
// otherwise use createRoot (dev mode)
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
