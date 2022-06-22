const alunos = [
    {
        nome: 'João',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
];

function alunosAprovados(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= media) {
            aprovados.push(alunos[i].nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 7));