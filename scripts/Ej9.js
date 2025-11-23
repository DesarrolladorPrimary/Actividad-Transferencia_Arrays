/* Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
tres objetos. Cada objeto debe representar un producto con propiedades como
nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
cada producto. */

const productos = [
  {
    nombre: "Laptop HP",
    precio: 2500000,
    disponibilidad: true,
  },
  {
    nombre: "Mouse Logitech",
    precio: 85000,
    disponibilidad: true,
  },
  {
    nombre: "Teclado mecánico",
    precio: 350000,
    disponibilidad: false,
  },
];

console.log("Productos completos:", productos);

console.log("\nNombres de productos:");
for (const producto of productos) {
  console.log(`- ${producto.nombre}`);
}
