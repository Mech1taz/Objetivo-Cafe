// js/productos_funciones.js
// Contiene las funciones para obtener, actualizar y agregar productos.

// Obtiene todos los productos (Base + Nuevos) con los precios actualizados.
function obtenerProductos() {
    let todos = [...productosBase]; 
    const actualizados = JSON.parse(localStorage.getItem("productosActualizados")) || {};
    const nuevos = JSON.parse(localStorage.getItem("productosNuevos")) || [];

    // Concatenar y aplicar actualizaciones
    const productosModificados = todos.concat(nuevos).map(prod => {
        if (actualizados[prod.id]) {
            return { ...prod, precio: actualizados[prod.id].precio };
        }
        return prod;
    });

    return productosModificados;
}

// Obtiene un solo producto por ID.
function obtenerProductoPorId(id) {
    const idNum = parseInt(id);
    const productos = obtenerProductos();
    return productos.find(p => p.id === idNum);
}

// Calcula el ID más alto para asignar un ID único a un nuevo producto.
function obtenerSiguienteId() {
    const todos = obtenerProductos();
    const maxId = todos.reduce((max, p) => Math.max(max, p.id), 0);
    return maxId + 1;
}

// Guarda un nuevo producto en el localStorage.
function guardarNuevoProducto(producto) {
    const nuevos = JSON.parse(localStorage.getItem("productosNuevos")) || [];
    
    // Asigna el siguiente ID disponible
    producto.id = obtenerSiguienteId(); 
    
    nuevos.push(producto);
    localStorage.setItem("productosNuevos", JSON.stringify(nuevos));
    return producto.id;
}

// Guarda una actualización de precio para un producto existente.
function actualizarPrecio(id, nuevoPrecio) {
    const guardados = JSON.parse(localStorage.getItem("productosActualizados")) || {};
    guardados[id] = { precio: nuevoPrecio };
    localStorage.setItem("productosActualizados", JSON.stringify(guardados));
}