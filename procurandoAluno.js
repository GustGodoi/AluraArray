// Buscando itens dentro de arrays

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8 , 7.5 , 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const index     = listaDeAlunosEMedias[0].indexOf(aluno);
        const notaAluno = listaDeAlunosEMedias[1][index];
        return `${aluno} está cadastrada(o). Sua média é: ${notaAluno}.`;
    } else {
        return "Aluno não encontrado!";
    }
}

console.log(exibeNomeENota("Juliana"));