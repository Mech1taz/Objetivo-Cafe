document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  const checkpass = document.getElementById("checkpass");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rut = document.getElementById("rut").value.trim();
    const nombre = document.getElementById("nom").value.trim();
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const mail = document.getElementById("mail").value.trim();

    // Valida
    if (pass !== repass) {
      checkpass.innerText = "Las contraseñas no coinciden";
      return;
    } else {
      checkpass.innerText = "";
    }

    // Obtener usuarios almacenados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar duplicados
    if (usuarios.find(u => u.rut === rut || u.mail === mail)) {
      alert("Ya existe un usuario con este RUT o correo");
      return;
    }

    // Guardar usuario
    const nuevoUsuario = { rut, nombre, pass, mail };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Guardar sesión activa
    localStorage.setItem("usuarioActivo", JSON.stringify(nuevoUsuario));

    alert("Registro exitoso, bienvenido " + nombre + " ☕");

    // Redirige a la pagina anterior del registro de sesion
    const paginaAnterior = document.referrer || "index.html";
    window.location.href = paginaAnterior;
  });
});
