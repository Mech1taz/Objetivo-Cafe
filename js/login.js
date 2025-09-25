// En tu archivo login.js - modifica la redirección al final
document.getElementById("formLogin").addEventListener("submit", (e) => {
    e.preventDefault();

    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;

    // Traer usuarios
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar credenciales
    const usuario = usuarios.find(u => u.mail === mail && u.pass === pass);

    if (usuario) {
        // Guardar sesión activa
        localStorage.setItem("usuarioActivo", usuario.nom);
        
        alert(`Bienvenido ${usuario.nom}`);
        
        // Volver a la página anterior o a index.html si no hay historial
        if (document.referrer && document.referrer.includes(window.location.hostname)) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }
    } else {
        alert("Credenciales incorrectas");
    }
});