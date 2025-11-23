/* Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
número de páginas y género. Luego imprima un mensaje descriptivo usando estas
propiedades, por ejemplo:
"El libro '___' del autor ___ pertenece al género ___." */

// Declarar un objeto que representa un libro con 4 propiedades
const libro = {
  titulo: "Cien años de soledad", // Propiedad: título del libro
  autor: "Gabriel García Márquez", // Propiedad: nombre del autor
  numeroPaginas: 471, // Propiedad: cantidad de páginas (número)
  genero: "Realismo mágico", // Propiedad: género literario
};

// Mostrar cada propiedad del libro de manera individual
console.log("Información del libro:");
console.log("Título:", libro.titulo); // Acceder a la propiedad 'titulo'
console.log("Autor:", libro.autor); // Acceder a la propiedad 'autor'
console.log("Número de páginas:", libro.numeroPaginas); // Acceder a 'numeroPaginas'
console.log("Género:", libro.genero); // Acceder a la propiedad 'genero'

// Crear un mensaje descriptivo usando template literals (backticks ` `)
// ${} permite insertar variables o propiedades dentro del string
console.log(
  `\nEl libro '${libro.titulo}' del autor ${libro.autor} pertenece al género ${libro.genero}.`
);
