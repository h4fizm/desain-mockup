// dropdown menu
const btn = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Optional: Klik di luar untuk menutup menu
window.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

// swiper js carousel section
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
});

// show password form profil
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");

  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleBtn.textContent = isPassword ? "Sembunyikan" : "Tampilkan";
}
