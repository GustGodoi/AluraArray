// Copíando um array para não alterar a estrutura do antigo
const notas = [7, 7, 8, 9];

// Para você copiar um arrya para um novo array devesse sempre utilizar o
// operador spread = [...array].
// Quando vc diz que array1 = array2, vc está dizendo para o JS que 
// os dois arrays são referente aos dados do mesmo espaço de memória
// por este motivo devesse usar o spread.
const novasNotas = [...notas, 10];


console.log(`As novas notas são: ${novasNotas}.`);
console.log(`As novas originais são: ${notas}.`);