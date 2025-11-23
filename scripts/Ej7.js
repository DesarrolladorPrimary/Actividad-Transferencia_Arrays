/* Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
arreglo usando for...of y muestre solo las edades mayores o iguales a 18. */

// Declarar un arreglo con 5 edades (algunas menores y otras mayores de edad)
const edades = [15, 22, 17, 25, 19];

// Mostrar todas las edades en la consola
console.log("Todas las edades:", edades);

// Mostrar un mensaje antes de filtrar
console.log("\nEdades mayores o iguales a 18:");

// Recorrer el arreglo usando for...of
for (const edad of edades) {
  // 'edad' toma el valor de cada elemento en cada iteración
  // Verificar si la edad es mayor o igual a 18
  if (edad >= 18) {
    // Si cumple la condición, mostrar la edad con un mensaje
    console.log(`- ${edad} años (Mayor de edad)`);
  }
  // Si la edad es menor a 18, no se muestra (se omite)
}
