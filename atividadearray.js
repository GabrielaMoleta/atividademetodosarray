//10 Metodos Array

//1ºSort
// Primeiro exemplo, o array frutas será ordenado alfabeticamente
let frutas = ['banana', 'abacaxi', 'laranja', 'maçã'];
frutas.sort();
console.log(frutas);


// Segundo exemplo: o array numeros será ordenado de forma crescente. 
let numeros = [10, 2, 15, 5]; 
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);

/*Primeiro declarei uma variável numeros e atribui 
a ela um array com os valores [10, 2, 15, 5].
 Depois utilizo o método sort() para ordenar os elementos do array, ele recebe a função 
de comparação para determinar a ordem. Nesse caso, a comparação recebe a e b, dois elementos
a serem comparados.
 A função retorna um valor negativo se a deve vir antes de b, um 
valor positivo se a deve vir depois de b, e 0 se eles são considerados iguais.
 A expressão a - b é uma forma simples de ordenar os números em ordem crescente.
 */