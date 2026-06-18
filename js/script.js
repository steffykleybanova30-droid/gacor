// Toggle class active
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("active");
    });
  }
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.querySelectorAll(".dropbtn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const dropdown = btn.parentElement;
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });
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
  const posisiSection = sectionMember.getBoundingClientRect();
  if (posisiSection.top < window.innerHeight - 150) {
    fotoMember.forEach((foto, indeks) => {
      if (!foto.classList.contains("sudah-muncul")) {
        setTimeout(() => {
          foto.classList.add("sudah-muncul");
        }, indeks * 250); 
      }
    });
  }
  if (posisiSection.top > window.innerHeight) {
    fotoMember.forEach((foto) => {
      foto.classList.remove("sudah-muncul");
    });
  }
});
