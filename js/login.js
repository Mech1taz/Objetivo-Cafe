document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");
  
    formLogin.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const email = document.getElementById("mail").value;
      const pass = document.getElementById("pass").value;
  
      if (email && pass) {
        // Guardar usuario
        localStorage.setItem("usuario", email);
        const nombre = email.split("@")[0];
        localStorage.setItem("nombreUsuario", nombre);
  
        // Recuperar página anterior o ir al inicio
        const paginaAnterior = localStorage.getItem("paginaAnterior");
        if (paginaAnterior) {
          window.location.href = paginaAnterior;
          localStorage.removeItem("paginaAnterior"); // limpiamos
        } else {
          window.location.href = "index.html";
        }
      } else {
        alert("Por favor completa todos los campos");
      }
    });
  });