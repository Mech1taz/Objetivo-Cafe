let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Mostrar carrito
function mostrarCarrito() {
  const tabla = document.getElementById("tablaCarrito");
  const totalElemento = document.getElementById("total");
  tabla.innerHTML = "";

  let total = 0;

  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    let fila = `
      <tr>
        <td>${item.nombre}</td>
        <td>${item.molienda ? item.molienda : "-"}</td>
        <td>${item.cantidad}</td>
        <td>$${subtotal}</td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });

  totalElemento.innerText = "Total: $" + total;
}

// Vaciar carrito
function vaciarCarrito() {
  if (confirm("¿Seguro que deseas vaciar el carrito?")) {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }
}

// Finalizar compra
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  alert("¡Gracias por tu compra! ☕");
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
}

// Cargar al inicio
document.addEventListener("DOMContentLoaded", mostrarCarrito);
