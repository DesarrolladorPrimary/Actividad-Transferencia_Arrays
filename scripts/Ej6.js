/* Describiendo un objeto personal: Cree un objeto que represente algo que lleve
consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
Object.entries(). */

const audifonos = {
  marca: "Sony",
  modelo: "WH-1000XM5",
  color: "Negro",
  conexion: "Bluetooth",
  bateria: "30 horas",
};

console.log("Objeto completo:", audifonos);

console.log("\nRecorriendo propiedades con for...of:");
for (const [clave, valor] of Object.entries(audifonos)) {
  console.log(`${clave}: ${valor}`);
}
