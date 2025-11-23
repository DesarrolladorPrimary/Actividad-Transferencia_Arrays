/* Describiendo un objeto personal: Cree un objeto que represente algo que lleve
consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
Object.entries(). */

// Declarar un objeto que representa unos audífonos con 5 propiedades
const audifonos = {
  marca: "Sony", // Propiedad: marca de los audífonos
  modelo: "WH-1000XM5", // Propiedad: modelo específico
  color: "Negro", // Propiedad: color
  conexion: "Bluetooth", // Propiedad: tipo de conexión
  bateria: "30 horas", // Propiedad: duración de la batería
};

// Mostrar el objeto completo en la consola
console.log("Objeto completo:", audifonos);

// Mostrar un mensaje antes de recorrer las propiedades
console.log("\nRecorriendo propiedades con for...of:");

// Object.entries() convierte el objeto en un arreglo de pares [clave, valor]
// for...of recorre cada par [clave, valor]
for (const [clave, valor] of Object.entries(audifonos)) {
  // Desestructuración: [clave, valor] extrae la clave y el valor de cada par
  // Mostrar cada propiedad en formato "clave: valor"
  console.log(`${clave}: ${valor}`);
}
