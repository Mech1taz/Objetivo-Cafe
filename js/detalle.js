// Datos de productos (puedes ampliarlos con accesorios/cafeteras)
const productos = {
  etiopia: {
    nombre: "Café Etiopia 500 gr",
    descripcion: "Aroma a chocolate nuez con caramelo achocolatado y fragancia cítrica naranja.",
    precio: 8500,
    img: "img/Cafe_etiopia.png",
    tipo: "cafe"
  },
  honduras: {
    nombre: "Café Honduras 250 gr",
    descripcion: "Tueste medio, notas a azúcar morena, frutos secos y acidez cítrica.",
    precio: 6000,
    img: "img/Cafe_honduras.png",
    tipo: "cafe"
  },
  chemex: {
    nombre: "Chemex",
    descripcion: "Cafetera de diseño clásico para preparación por filtrado.",
    precio: 35000,
    img: "img/chemex.png",
    tipo: "accesorio"
  }
};

// Obtener id del producto desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const producto = productos[id];

if (producto) {
  document.getElementById("producto-nombre").innerText = producto.nombre;
  document.getElementById("producto-descripcion").innerText = producto.descripcion;
  document.getElementById("producto-precio").innerText = producto.precio;
  document.getElementById("producto-img").src = producto.img;
}

function agregarAlCarrito() {
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (!usuarioActivo) {
    alert("Debes iniciar sesión para añadir productos al carrito.");
    window.location.href = "registro.html";
    return;
  }

  const cantidad = parseInt(document.getElementById("cantidad").value);
  let detalle = "";

  if (producto.tipo === "cafe") {
    const molienda = document.getElementById("molienda").value;
    detalle = "Molienda: " + molienda;
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({
    id,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad,
    detalle
  });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto añadido al carrito ✅");
  window.location.href = "carrito.html";
}
