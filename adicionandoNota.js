const notas = [10, 6, 8];

// array mesmo que seja uma const pode ser altarado, com valores entrando ou saindo dele
// .push() => método que é usado para adicionar valores a um array
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);