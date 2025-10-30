// js/detalle_equipo.js
// Script universal para inicializar las páginas de Cafeteras y Accesorios.
// Asume que productos.js, productos_funciones.js, y carrito.js ya fueron cargados.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener el ID del producto del atributo 'data-producto-id'
    const body = document.body;
    const productoId = body.getAttribute('data-producto-id');
    
    if (!productoId) return; 

    // Obtiene el objeto completo del producto
    const producto = obtenerProductoPorId(productoId); 
    
    if (!producto) {
        console.error(`Error: Producto ID ${productoId} no encontrado en productos.js.`);
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
            // Para Cafeteras/Accesorios, la opción de molienda es fija (N/A)
            const opcion = 'N/A'; 
            const cantidad = parseInt(document.getElementById('cantidad').value); 
            
            // Llamada a la función global del carrito
            if (typeof agregarAlCarrito === 'function') {
                agregarAlCarrito(producto.nombre, opcion, cantidad, producto.precio);
            }
        });
    }
});