//"string modelo"

const nome = "ju";
const idade = 2021-1981;
const cidadeNascimento = "Sp";

// const apresentacao = "meu nome e " + nome + ", minha idade e " + idade + ", nasci na cidade de " + cidadeNascimento;


const apresentacao = `meu nome e ${nome}, minha idade e ${idade}, nasci na cidade de ${cidadeNascimento}`;

console.log(apresentacao);

// entao template string e uma forma menos confusa de escrever strings com variaveis, ao inves de ficar concatenando se atentando aos caracteres como no 1o exemplo. Visando utilizar no lugar de ("") ou ('') o ascento agudo (``). POREM, nao obrigatoriamente todas as strings com ascento grave sao templates strings!!!!

