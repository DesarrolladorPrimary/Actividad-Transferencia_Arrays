/* Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
con un ejemplo.
a. Lista de colores favoritos.
b. Información completa de un estudiante.
c. Precios de diferentes camisetas.
d. Descripción de un computador portátil. */

// ========== a. Lista de colores favoritos - ARREGLO ==========
// Justificación: Es una colección simple de valores del mismo tipo sin propiedades específicas
// Los arreglos son ideales para listas de elementos similares

const coloresFavoritos = ["Azul", "Verde", "Morado", "Negro"];
console.log("a) Colores favoritos (ARREGLO):", coloresFavoritos);

// ========== b. Información completa de un estudiante - OBJETO ==========
// Justificación: Requiere múltiples propiedades con nombres específicos para describir características
// Los objetos son ideales cuando necesitamos describir algo con diferentes atributos

const estudiante = {
  nombre: "Keyner", // Propiedad: nombre del estudiante
  edad: 20, // Propiedad: edad (número)
  carrera: "Desarrollo de Software", // Propiedad: carrera que estudia
  semestre: 4, // Propiedad: semestre actual
  promedio: 4.2, // Propiedad: promedio académico
};
console.log("\nb) Información del estudiante (OBJETO):", estudiante);

// ========== c. Precios de diferentes camisetas - ARREGLO ==========
// Justificación: Es una lista de valores numéricos del mismo tipo
// Un arreglo es suficiente cuando solo necesitamos almacenar valores sin descripciones

const preciosCamisetas = [45000, 55000, 38000, 62000, 50000];
console.log("\nc) Precios de camisetas (ARREGLO):", preciosCamisetas);

// ========== d. Descripción de un computador portátil - OBJETO ==========
// Justificación: Necesita propiedades específicas para describir características técnicas
// Un objeto permite organizar mejor la información con claves descriptivas

const computador = {
  marca: "Lenovo", // Propiedad: marca del computador
  procesador: "Intel Core i7", // Propiedad: tipo de procesador
  ram: "16GB", // Propiedad: memoria RAM
  almacenamiento: "512GB SSD", // Propiedad: capacidad de almacenamiento
  pantalla: "15.6 pulgadas", // Propiedad: tamaño de pantalla
  precio: 3200000, // Propiedad: precio en pesos
};
console.log("\nd) Computador portátil (OBJETO):", computador);

// RESUMEN:
// - Usa ARREGLOS para listas de elementos similares (colores, precios, nombres, etc.)
// - Usa OBJETOS para describir entidades con múltiples características diferentes
