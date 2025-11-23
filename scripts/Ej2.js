/* Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue "Banano"
al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
utilizando for...of. */

// Declarar un arreglo con tres frutas iniciales
const frutas = ["Manzana", "Pera", "Uva"];

// Agregar "Banano" al inicio del arreglo usando unshift()
frutas.unshift("Banano"); // Ahora el arreglo es: ["Banano", "Manzana", "Pera", "Uva"]

// Mostrar en consola el arreglo después de agregar "Banano"
console.log("Después de agregar Banano al inicio:", frutas);

// Eliminar el último elemento del arreglo usando pop() y guardarlo
const eliminado = frutas.pop(); // Elimina "Uva" y lo guarda en 'eliminado'

// Mostrar en consola qué fruta fue eliminada
console.log(`Se eliminó: ${eliminado}`);

// Mostrar el arreglo final después de las modificaciones
console.log("Arreglo final:", frutas);

// Mostrar un mensaje antes de recorrer el arreglo
console.log("\nRecorriendo el arreglo:");

// Recorrer el arreglo usando for...of
for (const fruta of frutas) {
  // 'fruta' toma el valor de cada elemento en cada iteración
  // Mostrar cada fruta con un guion al inicio
  console.log(`- ${fruta}`);
}
