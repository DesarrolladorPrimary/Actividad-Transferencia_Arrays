/* Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
usando for y calcule el promedio (no use funciones externas). */

const notas = [4.5, 3.8, 4.2, 3.5, 4.0, 3.9];

console.log("Notas:", notas);

// Calcular promedio usando for
let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
  console.log(`Nota ${i + 1}: ${notas[i]}`);
}

const promedio = suma / notas.length;

console.log(`\nSuma total: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);
