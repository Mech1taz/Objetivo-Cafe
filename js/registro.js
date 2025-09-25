document.getElementById("formRegistro").addEventListener("submit", (e) => {
    e.preventDefault();

    const rut = document.getElementById("rut").value;
    const nom = document.getElementById("nom").value;
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const mail = document.getElementById("mail").value;

    // Validar contraseñas iguales
    if (pass !== repass) {
        document.getElementById("checkpass").innerText = "Las contraseñas no coinciden";
        return;
    } else {
        document.getElementById("checkpass").innerText = "";
    }

    // Traer usuarios
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar que el correo no esté registrado
    if (usuarios.some(u => u.mail === mail)) {
        alert("Este correo ya está registrado");
        return;
    }

    // Guardar nuevo usuario
    usuarios.push({ rut, nom, pass, mail });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Autologin -> guardar sesión activa
    localStorage.setItem("usuarioActivo", nom);

    alert(`Usuario registrado con éxito. Bienvenido ${nom}`);
    
    // Volver a la página anterior o a index.html si no hay historial
    if (document.referrer && document.referrer.includes(window.location.hostname)) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
});