document.getElementById("formRegistro").addEventListener("submit", (e) => {
  e.preventDefault();

  const rut = document.getElementById("rut").value;
  const nombre = document.getElementById("nom").value;
  const pass = document.getElementById("pass").value;
  const repass = document.getElementById("repass").value;
  const mail = document.getElementById("mail").value;

  if (pass !== repass) {
    document.getElementById("checkpass").innerText = "Las contraseñas no coinciden.";
    return;
  }

  // Crear objeto de usuario
  const usuario = { rut, nombre, mail, pass };

  // Guardar en localStorage (lista de usuarios)
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
  // Evitar duplicados por correo
  if (usuarios.find(u => u.mail === mail)) {
    alert("El correo ya está registrado.");
    return;
  }

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html";
});
