// Adicionando valores aos elementos de um array

const notas = [10, 9.5, 8, 7, 6];

// Método map lista os itens de um array, poden utilizar essa leitura
// podendo utilizar essa leitura para criar um novo array alterado
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(notasAtualizadas);

// Utilizando for
let notasAlteradas = [];
notas.forEach((nota) => {
    notasAlteradas.push(nota + 1 >= 10 ? 10 : nota + 1);
});

console.log(notasAlteradas);