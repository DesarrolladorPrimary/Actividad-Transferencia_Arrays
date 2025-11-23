/* Registro de un libro: Cree un objeto llamado libro con las propiedades: título, autor,
número de páginas y género. Luego imprima un mensaje descriptivo usando estas
propiedades, por ejemplo:
"El libro '___' del autor ___ pertenece al género ___." */

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  numeroPaginas: 471,
  genero: "Realismo mágico",
};

console.log("Información del libro:");
console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Número de páginas:", libro.numeroPaginas);
console.log("Género:", libro.genero);

console.log(
  `\nEl libro '${libro.titulo}' del autor ${libro.autor} pertenece al género ${libro.genero}.`
);
