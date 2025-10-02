document.getElementById("formLogin").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("mail").value;
  const pass = document.getElementById("pass").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar usuario válido
  const usuario = usuarios.find(u => u.mail === email && u.pass === pass);

  if (!usuario) {
    alert("Correo o contraseña incorrectos.");
    return;
  }

  // Guardar sesión actual
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redirigir a la página anterior o al inicio
  const paginaAnterior = localStorage.getItem("paginaAnterior") || "index.html";
  window.location.href = paginaAnterior;
});
