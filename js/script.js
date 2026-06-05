// Toggle class active
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Gabungkan semua fungsi klik di dokumen jadi satu
document.addEventListener("click", function (e) {
  // 1. Logika untuk menutup Dropdown
  // Jika yang diklik BUKAN elemen .dropdown, maka semua dropdown ditutup
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("active");
    });
  }

  // 2. Logika untuk menutup Hamburger Menu
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.querySelectorAll(".dropbtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = btn.parentElement;

    // tutup dropdown lain
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });

    // toggle yang diklik
    dropdown.classList.toggle("active");
  });
});

document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown").forEach((d) => {
    d.classList.remove("active");
  });
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
