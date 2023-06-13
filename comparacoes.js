// == (comparacao implicita)

const numero = 4;
const texto = "4";

console.log(numero==texto); // true, pois com dois iguais (comparacao implicita) nao e considerado o tipo (string, boolean, number) e sim so o valor.


// ===(comparacao explicita)
console.log(numero===texto); // false, pois a comparacao esta levando em consideracao alem dos valores o TIPO


//typeof
console.log(typeof numero);
console.log(typeof texto);
