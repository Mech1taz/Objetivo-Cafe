// js/carrito.js

// Claves de localStorage
const CARRITO_STORAGE_KEY = "carrito";
const ULTIMA_COMPRA_STORAGE_KEY = "ultimaCompra";
const VENTAS_STORAGE_KEY = "ventasHistorico"; // CLAVE USADA POR EL PANEL ADMIN

let carrito = JSON.parse(localStorage.getItem(CARRITO_STORAGE_KEY)) || [];

// 1. Función para agregar productos (Mantiene la mejora de sumar cantidad si ya existe)
function agregarAlCarrito(nombre, opcion, cantidad, precio) {
    const cantidadNum = parseInt(cantidad);
    const precioNum = parseInt(precio);
    
    if (isNaN(cantidadNum) || cantidadNum < 1 || isNaN(precioNum)) {
        alert("Error: Cantidad o precio inválido.");
        return;
    }

    const indexExistente = carrito.findIndex(item => 
        item.nombre === nombre && item.opcion === opcion
    );

    if (indexExistente !== -1) {
        carrito[indexExistente].cantidad += cantidadNum;
    } else {
        const nuevoItem = { nombre, opcion, cantidad: cantidadNum, precio: precioNum };
        carrito.push(nuevoItem);
    }
    
    localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
    alert(`🛒 Producto agregado: ${nombre} (${opcion}) x${cantidad}`);
    
    if (document.getElementById('tablaCarrito')) {
        mostrarCarrito();
    }
}

// 2. Función para mostrar la tabla del carrito
function mostrarCarrito() {
    const tabla = document.getElementById("tablaCarrito");
    const totalElem = document.getElementById("total");
    
    if (!tabla) return; 

    tabla.innerHTML = "";

    if (carrito.length === 0) {
        tabla.innerHTML = `<tr><td colspan="6" class="text-center p-4">Tu carrito está vacío</td></tr>`;
        totalElem.innerText = `Total: $0`;
        return;
    }

    carrito.forEach((item, index) => {
        const precioDisplay = item.precio.toLocaleString('es-CL');
        const subtotal = item.precio * item.cantidad;
        const subtotalDisplay = subtotal.toLocaleString('es-CL');

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.opcion || '-'}</td>
            <td>
                <input 
                    type="number" 
                    class="form-control form-control-sm" 
                    value="${item.cantidad}" 
                    min="1" 
                    style="width: 80px; display: inline-block;"
                    onchange="actualizarCantidad(${index}, this.value)"
                >
            </td>
            <td>$${precioDisplay}</td>
            <td>$${subtotalDisplay}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">
                    <i class="fas fa-trash-alt"></i> Eliminar
                </button>
            </td>
        `;
        tabla.appendChild(row);
    });

    totalElem.innerText = `Total: $${calcularTotal().toLocaleString('es-CL')}`;
}

// 3. Función auxiliar para calcular el total
function calcularTotal() {
    return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
}

// 4. Función para actualizar la cantidad
function actualizarCantidad(index, nuevaCantidad) {
    const cantidad = parseInt(nuevaCantidad);
    if (isNaN(cantidad) || cantidad < 1) {
        mostrarCarrito();
        return;
    }
    
    if (carrito[index]) {
        carrito[index].cantidad = cantidad;
        localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// 5. Función para eliminar un producto
function eliminarDelCarrito(index) {
    if (confirm("¿Estás seguro de que quieres eliminar este producto del carrito?")) {
        carrito.splice(index, 1);
        localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// 6. Función para guardar la venta en el histórico y finalizar la compra
function finalizarCompra() {
    if(carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    // 💰 PASO CRUCIAL: Guardar la venta en el historial para el panel de administración
    const ventasHistorico = JSON.parse(localStorage.getItem(VENTAS_STORAGE_KEY)) || [];
    
    // Guardamos una COPIA del carrito actual (lo que se acaba de comprar)
    ventasHistorico.push([...carrito]); 
    localStorage.setItem(VENTAS_STORAGE_KEY, JSON.stringify(ventasHistorico));

    // Guardar la última compra (para la página de boleta)
    localStorage.setItem(ULTIMA_COMPRA_STORAGE_KEY, JSON.stringify(carrito)); 

    // Vaciar carrito
    carrito = [];
    localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
    
    alert('¡Compra finalizada con éxito!');
    
    // Redirigir a boleta.html
    window.location.href = "boleta.html";
}


// Mostrar carrito al cargar la página (solo si estamos en carrito.html)
document.addEventListener("DOMContentLoaded", mostrarCarrito);