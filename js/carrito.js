// Leer carrito desde localStorage o crear vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos
function agregarAlCarrito(nombre, opcion, cantidad, precio) {
    const producto = { nombre, opcion, cantidad, precio };
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Producto agregado: ${nombre} (${opcion}) x${cantidad}`);
}

// Llamar al carrito
function mostrarCarrito() {
    const tabla = document.getElementById("tablaCarrito");
    if (!tabla) return;

    tabla.innerHTML = "";

    if (carrito.length === 0) {
        tabla.innerHTML = `<tr><td colspan="6">Tu carrito está vacío</td></tr>`;
    } else {
        carrito.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.opcion || '-'}</td>
                <td>${item.cantidad}</td>
                <td>$${item.precio}</td>
                <td>$${item.precio * item.cantidad}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                </td>
            `;
            tabla.appendChild(row);
        });
    }

    const totalElem = document.getElementById("total");
    if(totalElem) totalElem.innerText = `Total: $${calcularTotal()}`;
}

// Calcular total
function calcularTotal() {
    return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
}

// Eliminar producto
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Finalizar compra
function finalizarCompra() {
    if(carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    // Guardar la compra en localStorage
    localStorage.setItem("ultimaCompra", JSON.stringify(carrito));

    // Vaciar carrito
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redirigir a boleta.html
    window.location.href = "boleta.html";
}


// Mostrar carrito al cargar
document.addEventListener("DOMContentLoaded", mostrarCarrito);
