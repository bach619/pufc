import { renderToString } from 'react-dom/server'
import App from './App'

export function render(page = 'home') {
  return renderToString(<App initialPage={page} />)
}
