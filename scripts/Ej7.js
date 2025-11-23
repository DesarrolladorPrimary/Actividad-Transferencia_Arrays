/* Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
arreglo usando for...of y muestre solo las edades mayores o iguales a 18. */

const edades = [15, 22, 17, 25, 19];

console.log("Todas las edades:", edades);

console.log("\nEdades mayores o iguales a 18:");
for (const edad of edades) {
  if (edad >= 18) {
    console.log(`- ${edad} años (Mayor de edad)`);
  }
}
