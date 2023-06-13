a = []
b = 20
c = true 
d = ''

if (b=== 20 && c != false && d == 0) {
    console.log('verdade')                  //   VERDADE, A variável b possui o mesmo valor e o mesmo tipo e a primeira comparação é verdadeira. Como o valor armazenado na variável c é true e a comparação diz que c não é falso, o resultado também é verdadeiro. Na última comparação, o valor de d, que é uma string vazia é comparado com 0 e isso também é verdadeiro.
    console.log('false')
}


if (a == 0) {
    console.log('verdade')
} else {   //                                     VERDADE, ao comparar valores com == a condicao esta correta pois nao foi atribuido valor e nao estamos comparando o TIPO
    console.log('falso')
}

// if (d) {
//     console.log('verdade')
// } else {                                        ERRADO, d=0?????????? nao sei o pq.....
//     console.log('falso')
// }

if (b == '20') {
    console.log('verdade')
} else {  //                                       VERDADE, pois b == '20', uma vez que os dois iguais estao comparando o tipo
    console.log('falso')
}

