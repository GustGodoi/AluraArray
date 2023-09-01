// Buscando itens dentro de arrays

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8 , 7.5 , 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos    = listaDeAlunosEMedias[0];
        // const medias    = listaDeAlunosEMedias[1];
        // Forma de desestruturação de listas
        const [alunos, medias] = listaDeAlunosEMedias;

        const index     = alunos.indexOf(aluno);
        const notaAluno = medias[index];
        return `${aluno} está cadastrada(o). Sua média é: ${notaAluno}.`;
    } else {
        return "Aluno não encontrado!";
    }
}

console.log(exibeNomeENota("Juliana"));