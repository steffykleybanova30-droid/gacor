// Toggle class active
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

// 1. Ketika tombol Profil diklik, buka atau tutup dropdown
dropbtn.addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah lompat halaman jika menggunakan tag <a>
  e.stopPropagation(); // Mencegah klik ini memicu event di luar dropdown
  dropdown.classList.toggle("active");
});

// 2. Ketika ngeklik di mana saja di luar menu, dropdown akan otomatis menutup sendiri
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// ANIMASI FOTO MEMBER //
const fotoMember = document.querySelectorAll(".member-card-img");
const sectionMember = document.querySelector(".about-member");

window.addEventListener("scroll", () => {
  // Mengambil posisi koordinat kotak section member relatif terhadap layar
  const posisiSection = sectionMember.getBoundingClientRect();

  // 1. JIKA SCROLL TURUN: Section member mulai masuk ke area layar bawah
  if (posisiSection.top < window.innerHeight - 150) {
    fotoMember.forEach((foto, indeks) => {
      // Hanya jalankan transisi jika fotonya belum muncul
      if (!foto.classList.contains("sudah-muncul")) {
        setTimeout(() => {
          foto.classList.add("sudah-muncul");
        }, indeks * 250); // Jeda antrean antar-foto (0.25 detik)
      }
    });
  }

  // 2. JIKA SCROLL NAIK MENTOK: Layar naik ke atas sampai section member bener-bener gak kelihatan di bawah
  // Ini syarat biar kalau scroll naik biasa dia TETEP DI SITU, tapi kalau naik banget sampai lewat atas baru ke-reset
  if (posisiSection.top > window.innerHeight) {
    fotoMember.forEach((foto) => {
      foto.classList.remove("sudah-muncul"); // Reset jadi transparan lagi buat transisi berikutnya
    });
  }
});
