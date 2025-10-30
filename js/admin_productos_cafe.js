// js/admin_productos_cafe.js
// Lógica de interfaz para la administración de productos (carga de tabla, manejo de formulario).

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const listaProductos = document.getElementById('lista-productos');
    const formularioProducto = document.getElementById('formulario-producto');
    const botonAgregar = document.getElementById('boton-agregar-producto');
    const contenedorFormulario = document.getElementById('formulario-producto-container');
    const botonCancelar = document.getElementById('boton-cancelar-producto');

    // --- MANEJO DE VISTA ---

    function renderizarProductos() {
        const productos = obtenerProductos(); 
        listaProductos.innerHTML = ''; 

        productos.forEach(p => {
            const fila = document.createElement('tr');
            
            const categoriaDisplay = p.tipo.charAt(0).toUpperCase() + p.tipo.slice(1);

            fila.innerHTML = `
                <td>${p.nombre}</td>
                <td>${categoriaDisplay}</td>
                <td>
                    <input type="number" id="precio_input_${p.id}" class="form-control form-control-sm" value="${p.precio}" min="1" style="width: 100px;">
                </td>
                <td>N/A</td> 
                <td>
                    <button class="btn btn-sm btn-success me-2" onclick="handleActualizarPrecio(${p.id})">
                        <i class="fas fa-save"></i> Guardar
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="alert('Funcionalidad de Eliminación pendiente (ID: ${p.id})')">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            `;
            listaProductos.appendChild(fila);
        });
    }

    // --- MANEJO DE EVENTOS ---

    // Función global para actualizar el precio
    window.handleActualizarPrecio = function(id) {
        const inputElement = document.getElementById(`precio_input_${id}`);
        const nuevoPrecio = parseInt(inputElement.value);

        if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
            alert("El precio debe ser un número válido y positivo.");
            return;
        }

        actualizarPrecio(id, nuevoPrecio); // Llama a la función de productos_funciones.js
        alert(`Precio actualizado para el producto ID ${id}.`);
        renderizarProductos();
    };

    // Muestra/Oculta el formulario
    botonAgregar.addEventListener('click', () => {
        contenedorFormulario.classList.add('mostrar');
        formularioProducto.reset();
        document.getElementById('titulo-formulario-producto').textContent = 'Agregar Nuevo Producto';
    });

    botonCancelar.addEventListener('click', () => {
        contenedorFormulario.classList.remove('mostrar');
    });

    // Manejar el envío del formulario para AGREGAR un nuevo producto
    formularioProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre-producto').value.trim();
        const precio = parseInt(document.getElementById('precio-producto').value);
        const tipo = document.getElementById('categoria-producto').value;
        
        if (!nombre || isNaN(precio) || precio <= 0 || !tipo) {
            alert('Por favor, completa Nombre, Precio y Categoría correctamente.');
            return;
        }

        const nuevoProducto = {
            nombre: nombre,
            precio: precio,
            tipo: tipo,
            // Asigna opciones solo si es café
            opciones: (tipo === 'cafe') ? ["Grano entero", "Italiana", "Prensa Francesa", "Filtro"] : [], 
            imagen: `img/${nombre.toLowerCase().replace(/\s/g, '_')}.png`,
        };

        const nuevoId = guardarNuevoProducto(nuevoProducto); // Llama a la función de productos_funciones.js
        
        alert(`Producto "${nombre}" agregado con éxito. ID: ${nuevoId}`);
        formularioProducto.reset();
        contenedorFormulario.classList.remove('mostrar'); 
        renderizarProductos(); 
    });


    // Inicializar la vista al cargar la página
    renderizarProductos();
});