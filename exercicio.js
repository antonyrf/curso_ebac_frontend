const alunos = [
    {nome: 'Antonio', nota: '6'},
    {nome: 'Clara', nota: '2'},
    {nome: 'Ricardo', nota: '9'},
    {nome: 'Paulo', nota: '10'},
    {nome: 'Jonas', nota: '4'},
];

function filtroAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >=6);
}

const alunosAprovados = filtroAlunosAprovados(alunos);

console.log(alunosAprovados);