// Removendo elementos repetidos de um array
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set é uma classe de obejetos em JS que cria uma coleção de dados onde
// os itens não podem se repetir, serve mutito para limpar arrays pais
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

// FINALIZANADO CURSO DE FUNDAMENTOS DE ARRAYS EM JS