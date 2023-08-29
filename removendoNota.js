// Removendo elemnentos do Array
const notas = [10, 6, 8, 5.5, 10];

// A propriedade .pop() remove o elemento do array, se não passar elemento como parametro
// aparentemente eleimina o último elemento.
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A média é: ${media}.`);