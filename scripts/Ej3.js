/* Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
usando for y calcule el promedio (no use funciones externas). */

// Declarar un arreglo con 6 notas numéricas (escala de 1.0 a 5.0)
const notas = [4.5, 3.8, 4.2, 3.5, 4.0, 3.9];

// Mostrar todas las notas en la consola
console.log("Notas:", notas);

// Declarar una variable para acumular la suma de todas las notas
let suma = 0; // Inicializar en 0

// Recorrer el arreglo usando un ciclo for tradicional
for (let i = 0; i < notas.length; i++) {
  // i va de 0 hasta la longitud del arreglo - 1
  // Sumar cada nota al acumulador
  suma += notas[i]; // Equivalente a: suma = suma + notas[i]

  // Mostrar cada nota con su número de posición
  console.log(`Nota ${i + 1}: ${notas[i]}`); // i + 1 para mostrar posición desde 1
}

// Calcular el promedio dividiendo la suma entre la cantidad de notas
const promedio = suma / notas.length;

// Mostrar la suma total de todas las notas
console.log(`\nSuma total: ${suma}`);

// Mostrar el promedio con 2 decimales usando toFixed(2)
console.log(`Promedio: ${promedio.toFixed(2)}`);
