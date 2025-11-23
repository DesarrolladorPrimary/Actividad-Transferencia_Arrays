/* Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
con un ejemplo.
a. Lista de colores favoritos.
b. Información completa de un estudiante.
c. Precios de diferentes camisetas.
d. Descripción de un computador portátil. */

// a. Lista de colores favoritos - ARREGLO
// Justificación: Es una colección simple de valores del mismo tipo sin propiedades específicas
const coloresFavoritos = ["Azul", "Verde", "Morado", "Negro"];
console.log("a) Colores favoritos (ARREGLO):", coloresFavoritos);

// b. Información completa de un estudiante - OBJETO
// Justificación: Requiere múltiples propiedades con nombres específicos para describir características
const estudiante = {
  nombre: "Keyner",
  edad: 20,
  carrera: "Desarrollo de Software",
  semestre: 4,
  promedio: 4.2,
};
console.log("\nb) Información del estudiante (OBJETO):", estudiante);

// c. Precios de diferentes camisetas - ARREGLO
// Justificación: Es una lista de valores numéricos del mismo tipo
const preciosCamisetas = [45000, 55000, 38000, 62000, 50000];
console.log("\nc) Precios de camisetas (ARREGLO):", preciosCamisetas);

// d. Descripción de un computador portátil - OBJETO
// Justificación: Necesita propiedades específicas para describir características técnicas
const computador = {
  marca: "Lenovo",
  procesador: "Intel Core i7",
  ram: "16GB",
  almacenamiento: "512GB SSD",
  pantalla: "15.6 pulgadas",
  precio: 3200000,
};
console.log("\nd) Computador portátil (OBJETO):", computador);
