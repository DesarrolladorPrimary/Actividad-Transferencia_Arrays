/* Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado. */

const tareas = [];

console.log("Arreglo inicial:", tareas);

// Agregar tres actividades
tareas.push("Estudiar JavaScript");
console.log("Después de agregar tarea 1:", tareas);

tareas.push("Hacer ejercicios de arrays");
console.log("Después de agregar tarea 2:", tareas);

tareas.push("Revisar código");
console.log("Después de agregar tarea 3:", tareas);

// Eliminar la última tarea
const tareaEliminada = tareas.pop();
console.log(`\nSe eliminó la tarea: "${tareaEliminada}"`);

console.log("\nArreglo final:", tareas);
console.log(`Total de tareas: ${tareas.length}`);
