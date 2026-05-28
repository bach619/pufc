# SSB Palangka Raya United Football Club

> **Akademi Sepakbola Muda — Cetak Bintang Lapangan Sejak Dini**

Situs web resmi **Sekolah Sepakbola (SSB) Palangka Raya United Football Club**, sebuah akademi sepakbola muda yang berlokasi di Stadion Sanaman Mantikei, Palangka Raya, Kalimantan Tengah.

## Daftar Isi

- [Tentang Project](#tentang-project)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Struktur Project](#struktur-project)
- [Memulai Development](#memulai-development)
- [Build untuk Production](#build-untuk-production)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Lisensi](#lisensi)

---

## Tentang Project

SSB Palangka Raya United Football Club adalah platform informasi dan pendaftaran online untuk akademi sepakbola muda. Project ini bertujuan untuk:

- Menyediakan informasi profil akademi, program latihan, dan jadwal
- Mempermudah calon siswa mendaftar melalui form online yang terintegrasi WhatsApp
- Menunjukkan lokasi latihan melalui peta interaktif
- Menjadi media promosi digital untuk menjangkau lebih banyak calon pemain muda di Kalimantan Tengah

Project tersedia dalam **dua versi**:

| Versi | Deskripsi |
|-------|-----------|
| **React + Vite** (`src/`) | Aplikasi React modern dengan komponen terpisah, Tailwind CSS, dan fast refresh |
| **Static HTML** (`index-full.html`) | File HTML tunggal mandiri dengan CSS dan JavaScript inline (tidak perlu build) |

---

## Fitur

### Halaman Utama (*Landing Page* satu halaman)

| Bagian | Deskripsi |
|--------|-----------|
| **Navbar** | Navigasi sticky dengan logo, tautan halus (*smooth scroll*), dan tombol "Join Now". Responsif dengan menu *hamburger* di perangkat mobile. |
| **Hero** | Banner utama dengan ajakan mendaftar dan ilustrasi latihan. |
| **Tentang** | Tiga pilar akademi: prestasi & pembinaan, pelatih lisensi, karakter juara. Dilengkapi kutipan pelatih kepala. |
| **Program Latihan** | Tiga kelompok usia: Cilik (6–9 thn), Junior (10–13 thn), Remaja (14–17 thn). |
| **Jadwal Latihan** | Tabel jadwal (Rabu, Jumat, Minggu pukul 14.30 WIB) dengan badge warna. Responsif — berubah menjadi *card-style* di layar kecil. |
| **Form Pendaftaran** | Formulir online (nama, usia, program, posisi, email, WhatsApp, catatan) yang terkirim langsung ke admin via WhatsApp. |
| **Kontak & Lokasi** | Info telepon, WhatsApp center, alamat Stadion Sanaman Mantikei, dan Google Maps *embed*. |
| **Footer** | Logo, motto, copyright, dan tautan kembali ke atas. |

### Fitur Unggulan

- **WhatsApp Integration** — Pendaftaran otomatis terkirim sebagai pesan terformat ke nomor admin
- **Mobile First** — Tampilan responsif di semua ukuran layar (mobile, tablet, desktop)
- **Smooth Scroll** — Navigasi antar bagian dengan animasi halus
- **Tailwind CSS v4** — Utility-first styling yang cepat dan mudah dikustomisasi
- **Vite HMR** — *Hot Module Replacement* untuk development yang cepat

---

## Tech Stack

| Teknologi | Versi | Keterangan |
|-----------|-------|------------|
| **React** | ^19.0.0 | Library UI modern |
| **Vite** | ^6.0.0 | Build tool cepat |
| **Tailwind CSS** | ^4.0.0 | CSS utility framework |
| **@vitejs/plugin-react** | ^4.0.0 | Vite plugin untuk React |
| **@tailwindcss/vite** | ^4.0.0 | Vite plugin untuk Tailwind |
| **Font Awesome** | 6.x | Ikon (via CDN) |
| **Google Fonts (Inter)** | — | Tipografi utama |

---

## Struktur Project

```
pufc/
├── asset/
│   ├── hero.png            # Gambar hero
│   └── logo.jpg            # Logo klub
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigasi utama
│   │   ├── Hero.jsx        # Bagian hero/home
│   │   ├── About.jsx       # Tentang akademi
│   │   ├── Programs.jsx    # Program latihan
│   │   ├── Schedule.jsx    # Jadwal latihan
│   │   ├── Registration.jsx# Form pendaftaran
│   │   ├── Contact.jsx     # Kontak & lokasi
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Komponen utama (merangkai semua bagian)
│   ├── main.jsx            # Entry point React
│   └── index.css           # Gaya global + Tailwind
├── index.html              # Entry point HTML (React)
├── index-full.html         # Versi HTML statis mandiri
├── style.css               # Gaya untuk versi statis
├── package.json            # Dependensi dan skrip
├── vite.config.js          # Konfigurasi Vite
└── README.md               # Dokumentasi ini
```

### Alur Data

```
main.jsx
  └── App.jsx
        ├── Navbar
        ├── Hero
        ├── About
        ├── Programs
        ├── Schedule
        ├── Registration  (state lokal → WhatsApp API)
        ├── Contact
        └── Footer
```

- `Registration.jsx` mengelola state form dengan `useState` dan mengirim data melalui `window.open` ke URL WhatsApp.
- Tidak ada *backend server* — semua statis, pendaftaran dikirim langsung ke nomor admin.

---

## Memulai Development

### Prasyarat

- **Node.js** v18 atau lebih baru
- **npm** v9+ atau **yarn** v1.22+

### Instalasi

```bash
# Clone repositori
git clone https://github.com/username/ssb-palangka-raya-united.git
cd ssb-palangka-raya-united

# Install dependensi
npm install
```

### Menjalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`. Vite HMR memungkinkan perubahan kode langsung terlihat di browser tanpa reload penuh.

### Variabel yang Dapat Disesuaikan

Di `Registration.jsx`, ubah nomor WhatsApp admin:

```js
const WA_NUMBER = '6282256693226'   // Ganti dengan nomor admin
```

---

## Build untuk Production

```bash
npm run build
```

Hasil build akan berada di folder `dist/`. File siap di-*deploy* ke hosting statis seperti Vercel, Netlify, atau GitHub Pages.

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

---

## Panduan Kontribusi

1. *Fork* repositori ini
2. Buat *branch* fitur: `git checkout -b feat/fitur-baru`
3. *Commit* perubahan: `git commit -m 'feat: tambah fitur baru'`
4. *Push* ke branch: `git push origin feat/fitur-baru`
5. Ajukan *Pull Request*

Gaya kode mengikuti konvensi:
- Komponen React menggunakan *default export* + *arrow function*
- State management cukup dengan `useState` (belum perlu Redux/Context)
- CSS menggunakan Tailwind utility classes secara *inline*
- Nama file: `PascalCase.jsx` untuk komponen

---

## Lisensi

Hak cipta &copy; 2026 **SSB Palangka Raya United Football Club**.

Dibuat untuk keperluan promosi dan pendaftaran akademi sepakbola. Tidak untuk digunakan secara komersial tanpa izin.

---

> Dibangun dengan React + Vite + Tailwind CSS.  
> *Membangun generasi sepakbola berkarakter & berprestasi.*
