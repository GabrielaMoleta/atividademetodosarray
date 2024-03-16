//10 Metodos Array

//1ºSort
// Primeiro exemplo: o array frutas será ordenado alfabeticamente
let frutas = ['banana', 'abacaxi', 'laranja', 'maçã'];
frutas.sort();
console.log(frutas);

/*Primeiro declarei uma variável frutas e atribui a ela um array com os valores 
['banana', 'abacaxi', 'laranja', 'maçã'], que são strings representando diferentes frutas.
 O método sort() é usado para ordenar os elementos de um array.
 Quando chamado sem argumentos, ele ordena os elementos do array em ordem alfabética crescente,
o que significa que as strings são ordenadas de acordo com a ordem dos caracteres no padrão Unicode.
 Por último, o método console.log() é usado para exibir o array frutas.
*/


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
 Por último o método console.log() é usado para exibir o array numeros.
 */


//2ºJoin
//Primeiro exemplo: Unir elementos de um array em uma única string com o hífen
numeros = [1, 2, 3, 4, 5];
resultado = numeros.join("-");
console.log(resultado); 

/*Primeiro declarei uma variável numeros e atribui a ela um 
array com os valores [1, 2, 3, 4, 5].
O método join() é usado para criar e retornar uma nova string concatenando todos os elementos de um array. 
Ele recebe um argumento opcional que especifica o separador a ser usado entre os elementos. 
Nesse caso, usei o separador -. Portanto, o método join("-") vai juntar 
os elementos do array numeros separados por - e atribuir essa nova string à variável resultado.
Por último o método console.log() é usado para exibir o conteúdo da variável resultado.
*/


//Segundo exemplo: Unir palavras de um array em uma frase
palavras = ["Olá", "professor", "!"];
resultado = palavras.join(" ");
console.log(resultado);

/*Primeiro declarei uma variável palavras e atribui a ela um array com os valores 
["Olá", "professor", "!"], que são strings representando palavras e um ponto de exclamação.
O método join() é usado para criar e retornar uma nova string concatenando todos os elementos de um array.
 Ele recebe um argumento opcional que especifica o separador a ser usado entre os elementos, nesse caso, 
usei o separador " ", que é um espaço em branco. Portanto, o método join(" ") vai juntar os elementos do array 
palavras separados por um espaço em branco e atribuir essa nova string à variável resultado.
*/
