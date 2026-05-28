/**
 * Prerender script — generates fully rendered HTML for SEO.
 * 
 * This script:
 * 1. Reads the built `dist/index.html`
 * 2. Uses Vite SSR to render the React app to a string
 * 3. Injects the rendered HTML into the template
 * 4. Writes the result back to `dist/index.html`
 * 
 * Run after `npm run build`.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distIndex = path.resolve(root, 'dist', 'index.html')

async function prerender() {
  console.log('\n🔍 Prerendering halaman untuk SEO...')

  if (!fs.existsSync(distIndex)) {
    console.error('  ✗ File dist/index.html tidak ditemukan. Jalankan build terlebih dahulu.')
    process.exit(1)
  }

  // Create a Vite dev server in middleware mode to handle SSR transforms
  const { createServer } = await import('vite')
  const server = await createServer({
    root,
    configFile: path.resolve(root, 'vite.config.js'),
    server: { middlewareMode: true },
    appType: 'spa',
  })

  try {
    // Load the SSR entry via Vite's SSR transform pipeline
    const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
    
    // Render the entire app to an HTML string
    const appHtml = render()

    // Read the built HTML template
    const template = fs.readFileSync(distIndex, 'utf-8')

    // Check if we already have an SSR placeholder or the root div
    if (template.includes('<!--app-html-->')) {
      // Replace SSR placeholder
      const result = template.replace('<!--app-html-->', appHtml)
      fs.writeFileSync(distIndex, result, 'utf-8')
      console.log(`  ✓ Prerendered HTML berhasil diinjeksikan ke dist/index.html`)
    } else if (template.includes('<div id="root"></div>')) {
      // Replace empty root div with content + hydration hook
      const result = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )
      fs.writeFileSync(distIndex, result, 'utf-8')
      console.log(`  ✓ Prerendered HTML berhasil diinjeksikan ke dist/index.html`)
    } else {
      console.warn('  ⚠ Tidak dapat menemukan target injeksi di index.html')
    }

    // Log the size improvement info
    const finalSize = fs.statSync(distIndex).size
    console.log(`  📄 Ukuran final index.html: ${(finalSize / 1024).toFixed(1)} KB`)
  } catch (err) {
    console.error('  ✗ Gagal prerender:', err.message)
    console.error(err.stack)
    process.exit(1)
  } finally {
    await server.close()
  }
}

prerender()
