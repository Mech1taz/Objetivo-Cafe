// js/detalle_cafe.js
// Asume que productos.js, productos_funciones.js, y carrito.js ya fueron cargados.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el ID del producto del atributo 'data-producto-id' en el body
    const body = document.body;
    const productoId = body.getAttribute('data-producto-id');
    
    if (!productoId) return; // Si no hay ID, no hace nada.

    const producto = obtenerProductoPorId(productoId); 
    
    if (!producto) {
        console.error(`Error: Producto ID ${productoId} no encontrado.`);
        return;
    }

    // 2. Rellenamos el precio
    const precioElement = document.getElementById('precioProducto');
    if (precioElement) {
        precioElement.innerText = `$${producto.precio.toLocaleString('es-CL')}`;
    }

    // 3. Configuramos el evento del botón 'Añadir al carrito'
    const btnAgregar = document.getElementById('btnAgregar');
    if (btnAgregar) {
        btnAgregar.addEventListener('click', () => {
            const molienda = document.getElementById('molienda').value;
            const cantidad = parseInt(document.getElementById('cantidad').value);
            
            // Llamada a la función global del carrito
            if (typeof agregarAlCarrito === 'function') {
                agregarAlCarrito(producto.nombre, molienda, cantidad, producto.precio);
            } else {
                 alert("Error: El carrito no está cargado correctamente.");
            }
        });
    }
});