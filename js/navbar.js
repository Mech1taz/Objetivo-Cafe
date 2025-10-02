document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const userDropdown = document.getElementById("userDropdown");

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario) {
    // Ocultar link de login
    loginLink.classList.add("d-none");

    // Mostrar dropdown con nombre
    const userMenu = document.getElementById("navbarUser");
    userMenu.textContent = usuario.nombre;
    userDropdown.classList.remove("d-none");

    // Botón cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.href = "index.html";
    });
  } else {
    // Guardar página anterior antes de login
    loginLink.addEventListener("click", () => {
      localStorage.setItem("paginaAnterior", window.location.href);
    });
  }
});
