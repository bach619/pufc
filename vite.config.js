import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs'

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

export default defineConfig({
  plugins: [react(), tailwindcss(), copyAssets()],
  resolve: {
    alias: {
      '@asset': path.resolve(__dirname, 'asset'),
    },
  },
})
