/* Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
de nombres registrados.*/

const asistencia = ["Keyner", "Julian", "Jensen", "Diego", "Darcy"];

asistencia.push("Dayana");
alert(
  `Se ha ingresado a ${asistencia[asistencia.length - 1]} en la asistencia`
);
console.log(
  `Se ha ingresado a ${asistencia[asistencia.length - 1]} en la asistencia`
);

const eliminado = asistencia.shift();
alert(`Se ha eliminado de la asistencia al aprendiz ${eliminado}`);
console.log(`Se ha eliminado de la asistencia al aprendiz ${eliminado}`);

alert(`Total de nombres registrados: ${asistencia.length}`);
console.log(`Total de nombres registrados: ${asistencia.length}`);
