// Exemplo de forEach

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach tem lógica parecida com o For Of
// forEach pode buscar valores e indexes de arrays
// forEach Utiliza a lógica interna do JS para colocar nos parâmetros
// os valores espredos. EX: (nota, index)
// forEach sempre recebe uma function chamada de CallBack
// A Function CallBack pode ter 3 parâmetros, sendo eles:
// Os elementos do Array, seus indexes e por último o array total da leitura

notas.forEach(function (nota, index, array) {
    somaDasNotas += nota
    
    console.log(nota);
    console.log(index);
    console.log(array);
    console.log('-=-=-=-=-=-=-=-=-=');
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}.`);