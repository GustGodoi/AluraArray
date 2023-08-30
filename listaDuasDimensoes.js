// Criando um array de duas dimensão para controle de entidade X N valor

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8 , 7.5 , 9];

// Para criar arrays de 2 dimensões, basta que declarar um novo array, passando os outros
// como elementos do array pai.
const listaDeAlunosEMedias = [alunos, medias];

// Para acessar os elementos do array pai, devesse seguir a seguinte estrutura:
// listaDeAlunosEMedias[0][1]}
// onde o primeiro "[0]" faz alusão ao primeiro array filho, neste caso "alunos"
// Já o segundo "[1]" faz alusão ao identificar do item do array "alunos"
console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}. E sua nota é ${listaDeAlunosEMedias[1][1]}`);

// estrutura bem complexa, supondo que possam ter N arrays filhos, e que estes arrays
// tenham outros filhos
