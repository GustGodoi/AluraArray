// Efetuando a leitura de um array de duas dimensões com o For
// Soma e Média de um array de duas dimenções

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]


let somaDasMedias = 0
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        somaDasMedias += notasGerais[i][j] / notasGerais[i].length;
    }
}

const media = somaDasMedias / notasGerais.length;;

console.log(media);