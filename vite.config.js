import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs'
import sharp from 'sharp'

function copyAssets() {
  return {
    name: 'copy-assets',
    closeBundle() {
      const assetDir = path.resolve(__dirname, 'asset')
      const distAssetDir = path.resolve(__dirname, 'dist', 'asset')
      if (!existsSync(distAssetDir)) {
        mkdirSync(distAssetDir, { recursive: true })
      }
      for (const file of readdirSync(assetDir)) {
        const src = path.resolve(assetDir, file)
        if (statSync(src).isFile()) {
          copyFileSync(src, path.resolve(distAssetDir, file))
        }
      }
    },
  }
}

function optimizeImages() {
  const IMAGE_EXTS = ['.png', '.jpg', '.jpeg']

  return {
    name: 'optimize-images',
    closeBundle() {
      const distAssetDir = path.resolve(__dirname, 'dist', 'asset')
      if (!existsSync(distAssetDir)) return

      console.log('\n⚡ Optimasi gambar...')
      let totalOrig = 0
      let totalWebp = 0

      for (const file of readdirSync(distAssetDir)) {
        const src = path.resolve(distAssetDir, file)
        if (!statSync(src).isFile()) continue

        const ext = path.extname(file).toLowerCase()
        if (!IMAGE_EXTS.includes(ext)) continue

        const webpName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp')
        const webpPath = path.resolve(distAssetDir, webpName)
        const origSize = statSync(src).size

        sharp(src)
          .webp({ quality: 80 })
          .toFile(webpPath)
          .then(() => {
            const webpSize = statSync(webpPath).size
            const saved = ((1 - webpSize / origSize) * 100).toFixed(1)
            totalOrig += origSize
            totalWebp += webpSize
            console.log(`  ✓ ${file} (${(origSize / 1024).toFixed(0)} KB) → ${webpName} (${(webpSize / 1024).toFixed(0)} KB) — ${saved}% lebih kecil`)
          })
          .catch(err => console.error(`  ✗ Gagal optimize ${file}:`, err.message))
      }

      setTimeout(() => {
        if (totalOrig > 0) {
          const totalSaved = ((1 - totalWebp / totalOrig) * 100).toFixed(1)
          console.log(`  Total: ${(totalOrig / 1024).toFixed(0)} KB → ${(totalWebp / 1024).toFixed(0)} KB (${totalSaved}% lebih ringan)\n`)
        }
      }, 500)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyAssets(), optimizeImages()],
  resolve: {
    alias: {
      '@asset': path.resolve(__dirname, 'asset'),
    },
  },
})
