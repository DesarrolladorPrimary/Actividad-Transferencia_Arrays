/* Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue "Banano"
al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
utilizando for...of. */

const frutas = ["Manzana", "Pera", "Uva"];

// Agregar "Banano" al inicio
frutas.unshift("Banano");
console.log("Después de agregar Banano al inicio:", frutas);

// Retirar el último elemento
const eliminado = frutas.pop();
console.log(`Se eliminó: ${eliminado}`);
console.log("Arreglo final:", frutas);

// Recorrer con for...of
console.log("\nRecorriendo el arreglo:");
for (const fruta of frutas) {
  console.log(`- ${fruta}`);
}
