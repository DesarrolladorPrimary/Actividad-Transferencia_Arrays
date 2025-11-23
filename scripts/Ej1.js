/* Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
de nombres registrados.*/

// Declarar un arreglo constante con 5 nombres de aprendices
const asistencia = [
  "Keyner", // Primer elemento del arreglo (índice 0)
  "Julian", // Segundo elemento (índice 1)
  "Jensen", // Tercer elemento (índice 2)
  "Diego", // Cuarto elemento (índice 3)
  "Darcy", // Quinto elemento (índice 4)
];

// Agregar un nuevo nombre al final del arreglo usando push()
asistencia.push("Dayana"); // Ahora el arreglo tiene 6 elementos

// Mostrar mensaje de alerta con el último elemento agregado
alert(
  `Se ha ingresado a ${asistencia[asistencia.length - 1]} en la asistencia`
);

// Mostrar el mismo mensaje en la consola del navegador
console.log(
  `Se ha ingresado a ${asistencia[asistencia.length - 1]} en la asistencia`
);

// Eliminar el primer elemento del arreglo usando shift() y guardarlo en una variable
const eliminado = asistencia.shift(); // Elimina "Keyner" y lo guarda en 'eliminado'

// Mostrar mensaje de alerta con el nombre del aprendiz eliminado
alert(`Se ha eliminado de la asistencia al aprendiz ${eliminado}`);

// Mostrar el mismo mensaje en la consola
console.log(`Se ha eliminado de la asistencia al aprendiz ${eliminado}`);

// Mostrar la cantidad total de nombres que quedaron en el arreglo
alert(`Total de nombres registrados: ${asistencia.length}`);

// Mostrar el total también en la consola
console.log(`Total de nombres registrados: ${asistencia.length}`);
