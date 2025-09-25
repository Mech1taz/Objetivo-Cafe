// js/productos.js
// Lista de productos de Objetivo Café
const productos = [
  // Cafés (IDs 1–6)
  { id: 1, nombre: "Café de Colombia 250g", precio: 12990, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_colombia.png" },
  { id: 2, nombre: "Café Etiopía 250g", precio: 14990, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_etiopia.png" },
  { id: 3, nombre: "Café Honduras 250g", precio: 13490, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_honduras.png" },
  { id: 4, nombre: "Café Salvador Honey 250g", precio: 12990, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_salvador_honey.png" },
  { id: 5, nombre: "Café México 250g", precio: 14990, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_mexico.png" },
  { id: 6, nombre: "Café Descafeinado 250g", precio: 12990, tipo: "cafe", opciones: ["Grano","Molido - Italiana","Molido - Prensa Francesa","Molido - Filtro"], imagen: "img/cafe_descafeinado.png" },

  // Cafeteras (101–106)
  { id: 101, nombre: "Cafetera Francesa 600ml", precio: 13990, tipo: "cafetera", opciones: [], imagen: "img/cafetera_francesa.png" },
  { id: 102, nombre: "Cafetera Francesa Bambú 1L", precio: 20990, tipo: "cafetera", opciones: [], imagen: "img/cafetera_francesa_bambu.png" },
  { id: 103, nombre: "Moka Italiana 350ml", precio: 14990, tipo: "cafetera", opciones: [], imagen: "img/italiana 350ml.png" },
  { id: 104, nombre: "Aeropress Go", precio: 74990, tipo: "cafetera", opciones: [], imagen: "img/aeropress_go.png" },
  { id: 105, nombre: "Chemex", precio: 59990, tipo: "cafetera", opciones: [], imagen: "img/chemex.png" },
  { id: 106, nombre: "V60", precio: 29990, tipo: "cafetera", opciones: [], imagen: "img/v60.png" },

  // Accesorios (201–204)
  { id: 201, nombre: "Pesa Timemore", precio: 50990, tipo: "accesorio", opciones: [], imagen: "img/pesa_timemore.png" },
  { id: 202, nombre: "Filtros Aeropress", precio: 8990, tipo: "accesorio", opciones: [], imagen: "img/filtros_aeropress.png" },
  { id: 203, nombre: "Timemore Chestnut C3 Pro", precio: 119990, tipo: "accesorio", opciones: [], imagen: "img/molino_timemore.png" },
  { id: 204, nombre: "Molino Manual Zebrang", precio: 79990, tipo: "accesorio", opciones: [], imagen: "img/molino_zebrang.png" }
];
