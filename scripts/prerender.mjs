/**
 * Prerender script — generates fully rendered HTML for all pages (multi-page SSR).
 * 
 * This script:
 * 1. Reads the built `dist/index.html` template (with meta placeholders)
 * 2. Uses Vite SSR to render each page (home, privacy, terms, cookies)
 * 3. Replaces meta placeholders with page-specific values
 * 4. Writes each result to its own dist subfolder
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distIndex = path.resolve(root, 'dist', 'index.html')

// ── Page configuration ──
const PAGES = {
  home: {
    id: 'home',
    path: 'index.html',
    title: 'SSB Palangka Raya United FC | Akademi Sepakbola Muda Palangka Raya',
    desc: 'SSB Palangka Raya United Football Club — akademi sepakbola anak usia 6-17 tahun di Palangka Raya, Kalimantan Tengah. Daftar sekarang! Latihan di Stadion Sanaman Mantikei.',
    keywords: 'SSB Palangka Raya, akademi sepakbola Palangka Raya, sekolah sepakbola Kalimantan Tengah, PR United FC, sepakbola anak Palangka Raya, latihan sepakbola Palangkaraya, sekolah sepakbola Kalimantan Tengah, SSB terbaik Palangka Raya',
    ogTitle: 'SSB Palangka Raya United FC | Akademi Sepakbola Muda',
    ogDesc: 'Akademi sepakbola untuk usia 6-17 tahun di Palangka Raya. Latihan di Stadion Sanaman Mantikei. Bergabunglah!',
    noscriptText: 'Akademi sepakbola muda di Palangka Raya, Kalimantan Tengah.',
  },
  privacy: {
    id: 'privacy',
    path: 'privacy/index.html',
    title: 'Kebijakan Privasi - SSB Palangka Raya United FC',
    desc: 'Kebijakan Privasi SSB Palangka Raya United FC — bagaimana kami mengelola dan melindungi data pribadi Anda sesuai UU ITE dan UU PDP.',
    keywords: 'kebijakan privasi, privasi data, SSB Palangka Raya, perlindungan data pribadi, UU PDP',
    ogTitle: 'Kebijakan Privasi - SSB Palangka Raya United FC',
    ogDesc: 'Pelajari bagaimana SSB Palangka Raya United FC mengelola dan melindungi data pribadi Anda.',
    noscriptText: 'Kebijakan Privasi SSB Palangka Raya United Football Club.',
  },
  terms: {
    id: 'terms',
    path: 'terms/index.html',
    title: 'Syarat & Ketentuan - SSB Palangka Raya United FC',
    desc: 'Syarat dan Ketentuan pendaftaran SSB Palangka Raya United FC — akademi sepakbola muda di Palangka Raya, Kalimantan Tengah.',
    keywords: 'syarat dan ketentuan, syarat pendaftaran, SSB Palangka Raya, akademi sepakbola, terms of service',
    ogTitle: 'Syarat & Ketentuan - SSB Palangka Raya United FC',
    ogDesc: 'Syarat dan Ketentuan pendaftaran SSB Palangka Raya United Football Club.',
    noscriptText: 'Syarat dan Ketentuan SSB Palangka Raya United Football Club.',
  },
  cookies: {
    id: 'cookies',
    path: 'cookies/index.html',
    title: 'Kebijakan Cookie - SSB Palangka Raya United FC',
    desc: 'Kebijakan Cookie SSB Palangka Raya United FC — jenis cookie yang digunakan dan cara mengontrolnya.',
    keywords: 'kebijakan cookie, cookie policy, SSB Palangka Raya, privasi browser',
    ogTitle: 'Kebijakan Cookie - SSB Palangka Raya United FC',
    ogDesc: 'Pelajari bagaimana SSB Palangka Raya United FC menggunakan cookie dan cara mengontrolnya.',
    noscriptText: 'Kebijakan Cookie SSB Palangka Raya United Football Club.',
  },
}

const BASE_URL = 'https://www.pufc-palangkaraya.sbs'

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

    // Read the built HTML template once
    const template = fs.readFileSync(distIndex, 'utf-8')

    for (const [key, cfg] of Object.entries(PAGES)) {
      // ── Render React to string ──
      const appHtml = render(cfg.id)

      // ── Build page URL ──
      const pageUrl = cfg.path === 'index.html'
        ? `${BASE_URL}/`
        : `${BASE_URL}/${cfg.path.replace('/index.html', '')}/`

      // ── Replace placeholders ──
      let html = template
        .replace('<!--page-id-->', cfg.id)
        .replace('<!--app-html-->', appHtml)
        .replace('<!--page-title-->', cfg.title)
        .replace('<!--page-desc-->', cfg.desc)
        .replace('<!--page-keywords-->', cfg.keywords)
        .replace('<!--page-canonical-->', pageUrl)
        .replace('<!--page-og-title-->', cfg.ogTitle)
        .replace('<!--page-og-desc-->', cfg.ogDesc)
        .replace('<!--noscript-text-->', cfg.noscriptText)

      // ── Write output file ──
      const outPath = path.resolve(root, 'dist', cfg.path)
      const outDir = path.dirname(outPath)

      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true })
      }

      fs.writeFileSync(outPath, html, 'utf-8')

      const sizeKB = (fs.statSync(outPath).size / 1024).toFixed(1)
      console.log(`  ✓ ${cfg.path.padEnd(20)} ${sizeKB} KB — ${cfg.title}`)
    }
  } catch (err) {
    console.error('  ✗ Gagal prerender:', err.message)
    console.error(err.stack)
    process.exit(1)
  } finally {
    await server.close()
  }
}

prerender()
