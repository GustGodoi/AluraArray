// Utilizando o método Filter do JS

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

// Filter é um método que funciona como map, ele recebe uma function
// como parãmetro e pode retornar elementos para outros array
// Filter sempre retorno True ou False, ou seja, se está ou não de
// acordo com a condiçãodo filtro
// Caso você não esteja utilizando o parâmetro da function, por convenção
// sempre é colocado um "_" como nomeador.
const reporvados = alunos.filter((_, index) => {
    return medias[index] < 7;
});

console.log(reporvados);