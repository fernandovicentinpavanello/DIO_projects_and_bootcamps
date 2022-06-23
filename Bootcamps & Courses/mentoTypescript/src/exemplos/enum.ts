const pessoa = {
    nome: 'Fernando',
    idade: 36,
    profissão: 'Desenvolvedor'
}

pessoa.idade = 37;

const pessoa1 : {nome: string, idade: number, profissao: string} = {
    nome: 'Maria',
    idade: 31,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professor, Professora, Engenheiro, Engenheira, Desenvolvedor, Desenvolvedora
}

type Pessoa = {
    name: string,
    idade: number,
    casado: boolean,
    profissao?: Profissao // Aqui inserimos o enum como um tipo
}

const gabriel = {
    nome: 'Gabriel',
    idade: 26,
    casado: false,
    profissao: Profissao.Engenheiro // E aqui usamos ele para definir de forma padronizada a profissão de cada objeto do tipo Pessoa
}

const barbara: Pessoa = {
    name: "Bárbara",
    idade: 34,
    casado: true,
    profissao: Profissao.Professor // Tudo padronizado e consistente 
}

interface Estudante extends Pessoa {
    materias: string[]
}

const jessica: Estudante = {
    name: "Jéssica",
    idade: 23,
    casado: false,
    profissao: Profissao.Engenheira, // Tudo padronizado e consistente  
    materias: ['Matemática', 'Física']
}