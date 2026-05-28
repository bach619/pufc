import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { existsSync, readdirSync, statSync } from 'fs'
import sharp from 'sharp'

function optimizeImages() {
  const IMAGE_EXTS = ['.png', '.jpg', '.jpeg']

  function toWebp(dir) {
    if (!existsSync(dir)) return
    for (const file of readdirSync(dir)) {
      const src = path.resolve(dir, file)
      if (!statSync(src).isFile()) continue
      const ext = path.extname(file).toLowerCase()
      if (!IMAGE_EXTS.includes(ext)) continue
      const webpName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      const webpPath = path.resolve(dir, webpName)
      if (existsSync(webpPath)) continue // skip if already exists
      const origSize = statSync(src).size
      sharp(src)
        .webp({ quality: 80 })
        .toFile(webpPath)
        .then(() => {
          const webpSize = statSync(webpPath).size
          const saved = ((1 - webpSize / origSize) * 100).toFixed(1)
          console.log(`  ✓ ${file} → ${webpName} (${saved}% lebih kecil)`)
        })
        .catch(err => console.error(`  ✗ Gagal optimize ${file}:`, err.message))
    }
  }

  return {
    name: 'optimize-images',
    configureServer(server) {
      // Generate .webp for dev mode so <picture> elements work
      const assetDir = path.resolve(__dirname, 'public', 'asset')
      if (existsSync(assetDir)) {
        console.log('\n⚡ Menyiapkan webp untuk dev mode...')
        toWebp(assetDir)
      }
    },
    closeBundle() {
      const distAssetDir = path.resolve(__dirname, 'dist', 'asset')
      if (!existsSync(distAssetDir)) return

      console.log('\n⚡ Optimasi gambar...')
      toWebp(distAssetDir)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), optimizeImages()],
  resolve: {
    alias: {
      '@asset': path.resolve(__dirname, 'public', 'asset'),
    },
  },
})
