// Utilizando o método REDUCE
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Utilizando uma função genérica para calcular o valor total
// de um array.
// Função recebe um array como parâmetro
// E retorna um novo valor, com os dados tratados pelo metodo reduce
// Método reduce recebe uma função como parâmetro(Declarando
// uma variável acumuladora e outra para os valores), além de mais um pa-
// râmetro com valor zerados(zera o valor da acumuladora).
function calculaMedia(notasDaSala) {
    const SomaDasNotas = notasDaSala.reduce((acc, nota) =>  acc + nota, 0);
    
    const media = SomaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é: ${calculaMedia(salaJS)}.`);
console.log(`A média da sala de Java é: ${calculaMedia(salaJava)}.`);
console.log(`A média da sala de Python é: ${calculaMedia(salaPython)}.`);