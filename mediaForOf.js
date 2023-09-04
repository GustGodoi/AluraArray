// Exemplo de For Outra Estrutura 

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
// For of faz a leitura dos elementos de uma coleção, totalmente automático
for (let elemento of notas) {
    somaDasNotas += elemento
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}.`);