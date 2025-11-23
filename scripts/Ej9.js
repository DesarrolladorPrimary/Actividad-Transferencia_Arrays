/* Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
tres objetos. Cada objeto debe representar un producto con propiedades como
nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
cada producto. */

// Declarar un arreglo que contiene 3 objetos (cada objeto es un producto)
const productos = [
  // Primer producto (objeto 1)
  {
    nombre: "Laptop HP", // Propiedad: nombre del producto
    precio: 2500000, // Propiedad: precio en pesos
    disponibilidad: true, // Propiedad: si está disponible (booleano)
  },
  // Segundo producto (objeto 2)
  {
    nombre: "Mouse Logitech",
    precio: 85000,
    disponibilidad: true,
  },
  // Tercer producto (objeto 3)
  {
    nombre: "Teclado mecánico",
    precio: 350000,
    disponibilidad: false, // Este producto no está disponible
  },
];

// Mostrar el arreglo completo con todos los objetos
console.log("Productos completos:", productos);

// Mostrar un mensaje antes de recorrer
console.log("\nNombres de productos:");

// Recorrer el arreglo de objetos usando for...of
for (const producto of productos) {
  // 'producto' es cada objeto en cada iteración
  // Acceder a la propiedad 'nombre' de cada objeto
  console.log(`- ${producto.nombre}`);
}
