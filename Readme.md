# Pemenuhan Tugas Praktikum

# Personal Portfolio Website 

Repositori ini berisi proyek tugas pengembangan website portofolio pribadi berbasis HTML5, CSS3, dan Vanilla JavaScript[cite: 4, 5]. Proyek ini berfokus pada implementasi *slicing* antarmuka dari desain Figma ke dalam kode nyata, dilengkapi tata letak responsif dan manipulasi DOM interaktif.

---

## 🎨 Desain Referensi

Website ini diimplementasikan berdasarkan rancangan UI/UX template komunitas Figma berikut:
* **Figma Design Link:** [Illustration Based Portfolio Website Template (Community)](https://www.figma.com/design/vcIHwLz1JRN6l689WAH4Pw/Illustration-Based-Portfolio-Website-Template--Community-?node-id=0-1&t=lJs8zMSaeOAISoQJ-0)

---

## 🚀 Fitur Utama

### 1. Struktur Halaman & Slicing Antarmuka
* **Header & Navigasi:** Menu tautan navigasi dan tombol resume.
* **Hero Section:** Perkenalan profil dengan ilustrasi vektor.
* **Skills Section:** Daftar kemampuan teknologi (*tech stack*) yang disajikan dalam bentuk grid kartu bujur sangkar (Postgres, Figma, Python, C#, HTML, CSS)[cite: 4, 5].
* **About Me:** Penjelasan latar belakang, fokus studi, dan narasi personal.
* **Projects Showcase:** Penataan portofolio selang-seling (*alternating layout*) untuk studi kasus sistem aplikasi.
* **Contact & Footer:** Informasi kontak, integrasi aksi langsung, dan tautan sosial media[cite: 4, 5].

### 2. Responsivitas Layar
* Penggunaan CSS Media Queries (`@media (max-width: 768px)`) untuk memastikan tata letak beradaptasi secara fleksibel dari resolusi monitor desktop hingga layar smartphone tanpa ada kebocoran batas (*horizontal overflow*).

### 3. Interaktivitas JavaScript (DOM Manipulation)
* **Resume & Direct Action:** Interaksi tombol resume untuk membuka berkas CV.
* **Get In Touch via WhatsApp API:** Integrasi tombol kontak langsung membuka ruang obrolan WhatsApp dengan pesan templat otomatis[cite: 4].
* **Back to Top Button:** Tombol melayang di pojok kanan bawah yang muncul dinamis saat halaman di-scroll ke bawah dan mengembalikan posisi layar ke paling atas secara halus (*smooth scroll*).

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik dokumen web (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)[cite: 4].
* **CSS3:** 
  * CSS Variables (`:root`) untuk manajemen palet tema warna[cite: 5].
  * Flexbox & CSS Grid untuk penataan komponen[cite: 5].
  * Media Queries untuk penanganan perangkat mobile/tablet.
* **Vanilla JavaScript:** 
  * DOM Event Listeners (`click`, `scroll`).
  * Web APIs (`IntersectionObserver`, `window.open()`, `window.scrollTo()`).
* **Fonts:** Montserrat & Inter (via Google Fonts)[cite: 4, 5].

--