// Reescrevendo um array de strings

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

// Lendo com o MAP e reescrevendo o array para outro array
const NomesToUpper = nomes.map((nome) => nome.toUpperCase());

console.log('NomesToUpper: ' + NomesToUpper);

// Utilizando For
NomesPadronizados = [];
nomes.forEach((nome) => NomesPadronizados.push(nome.toUpperCase()));

console.log('NomesPadronizados: ' +  NomesPadronizados);