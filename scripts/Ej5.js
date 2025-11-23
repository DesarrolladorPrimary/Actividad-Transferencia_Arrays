/* Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado. */

// Declarar un arreglo vacío para almacenar las tareas
const tareas = [];

// Mostrar el arreglo inicial (vacío)
console.log("Arreglo inicial:", tareas);

// Agregar la primera tarea usando push()
tareas.push("Estudiar JavaScript"); // Ahora tareas = ["Estudiar JavaScript"]
console.log("Después de agregar tarea 1:", tareas);

// Agregar la segunda tarea
tareas.push("Hacer ejercicios de arrays"); // Ahora tareas = ["Estudiar JavaScript", "Hacer ejercicios de arrays"]
console.log("Después de agregar tarea 2:", tareas);

// Agregar la tercera tarea
tareas.push("Revisar código"); // Ahora tareas = ["Estudiar JavaScript", "Hacer ejercicios de arrays", "Revisar código"]
console.log("Después de agregar tarea 3:", tareas);

// Eliminar la última tarea usando pop() y guardarla en una variable
const tareaEliminada = tareas.pop(); // Elimina "Revisar código" y lo guarda

// Mostrar qué tarea fue eliminada
console.log(`\nSe eliminó la tarea: "${tareaEliminada}"`);

// Mostrar el arreglo final después de eliminar la última tarea
console.log("\nArreglo final:", tareas);

// Mostrar la cantidad total de tareas que quedaron
console.log(`Total de tareas: ${tareas.length}`);
