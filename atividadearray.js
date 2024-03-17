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
 Por último, o console.log() é usado para exibir o array frutas: [ 'abacaxi', 'banana', 'laranja', 'maçã' ]
*/


// Segundo exemplo: o array numeros será ordenado de forma crescente. 
let numeros = [10, 2, 15, 5];
numeros.sort(function (a, b) {
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
 Por último o console.log() é usado para exibir o array numeros: [ 2, 5, 10, 15 ]
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
 Por último o console.log() é usado para exibir o conteúdo da variável resultado: 1-2-3-4-5
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
Por último o console.log() é usado para exbir o conteúdo da variável resultado: Olá professor !
*/


//3ºConcat

//Primeiro exemplo: Concatenar dois arrays, criando um novo array
letras = ["a", "b", "c"];
numeros = [1, 2, 3];

const alfaNumerico = letras.concat(numeros);
console.log(alfaNumerico);

/*Primeiro declarei uma constante letras e atribui a ela um array com os valores 
["a", "b", "c"]. Logo em seguida, Aqui, estamos declarei uma constante numeros 
e atribuindo a ela um array com os valores [1, 2, 3].
 O método concat() é usado para combinar dois ou mais arrays, criando um novo array que contém os elementos
dos arrays originais. Nesse caso, estamos concatenando os arrays letras e numeros, criando um novo array chamado 
alfaNumerico que contém todos os elementos de letras seguidos por todos os elementos de numeros.
Por último, o método console.log() é usado para exibir o conteúdo da variável alfaNumerico, 
resultando em [ 'a', 'b', 'c', 1, 2, 3 ] */


//Segundo exemplo: Concatenar um array com um valor individual
const array = [1, 2, 3];
const numeroIndividual = 4;
const newArray = array.concat(numeroIndividual);
console.log(newArray); // Resultado: [1, 2, 3, 4]

/*Primeiro declarei uma constante array e atribui a ela um array com os valores [1, 2, 3]. Logo após declarei
uma constante numeroIndividual e atribui a ela o valor 4.
 O método concat() é usado para combinar dois ou mais arrays, criando um novo array que contém os
elementos dos arrays originais. 
 Nesse caso, estamos concatenando o array array com o valor numeroIndividual, 
criando um novo array newArray que contém todos os elementos de array seguidos por numeroIndividual.
O console.log() é usado para exibir o conteúdo da variável newArray: [ 1, 2, 3, 4 ] 
*/

//4ºSlice

//Primeiro exemplo: Copiar uma parte de um array sem modificar o array de origem.
colors = ['red', 'green', 'blue', 'pink'];
rgb = colors.slice(0, 3);
console.log(rgb);

/*Primeiro declarei uma variável colors e atribui a ela um array com os valores 
['red', 'green', 'blue', 'pink']
O método slice() é usado para retornar uma parte do array, começando do índice inicial especificado até, 
mas não incluindo, o índice final especificado. Nesse caso, estamos usando slice(0, 3), 
o que significa que estamos criando um novo array chamado rgb que contém os elementos do colors do índice 0 
até o índice 2 (o índice 3 não é incluído).
Por último o console.log() é usado para exibir o conteúdo da variável rgb: [ 'red', 'green', 'blue' ]
*/

//Segundo exemplo: Obter os últimos três elementos do array anterior
const sequencia = [10, 20, 30, 40, 50];
const slicesNumeros = sequencia.slice(-3);
console.log(slicesNumeros);

/*Primeiro declarei uma constante sequencia e atribui a ela um array com os valores 
[10, 20, 30, 40, 50].
O método slice() é usado para retornar uma parte de um array, começando do índice especificado até o final do array. 
Quando o índice é negativo, ele conta a partir do final do array. Neste caso, estamos usando slice(-3), o que significa 
que estamos criando um novo array chamado slicesNumeros que contém os três últimos elementos de sequencia.
Por último o console.log() é usado para exibir o conteúdo da variável slicesNumeros: [ 30, 40, 50 ]
*/

//5ºforEach

//Primeiro exemplo: Executa uma função para cada elemento do array.
const ordem = [1, 2, 3];
ordem.forEach((element) => {
    console.log(element);
});

/*Primeiro declarei uma constante ordem e atribuindo a ela um array com os valores [1, 2, 3].
O método forEach() é usado para iterar sobre os elementos de um array e executar uma função de callback para cada elemento. 
Neste caso, estamos chamando forEach() no array ordem e passando uma função de callback que recebe um parâmetro element, 
que representa cada elemento do array. (Callback: permite passar uma função como argumento para outra função, que será 
executada em um momento específico ou em resposta a um evento.)
Dentro da função de callback, estamos usando o console.log() para exibir cada element no console. A cada iteração, o element
será um dos elementos do array ordem:
1
2
3
*/

//Segundo exemplo: Utilizando forEach para imprimir o plural de cada fruta
const alimentos = ['maçã', 'banana', 'laranja'];

alimentos.forEach(alimentos => {

  console.log(alimentos + 's');

});

/*Primeiro declarei uma constante alimentos e atribui a ela um array
 com os valores ['maçã', 'banana', 'laranja'].
 O método forEach() é usado para iterar sobre os elementos de um array e executar uma função de callback para cada elemento. 
 Neste caso, estamos chamando forEach() no array alimentos e passando uma função de callback que recebe um parâmetro alimento, 
 que representa cada elemento do array.
 Dentro da função de callback, estamos usando console.log() para exibir cada alimento seguido da letra 's'. A cada iteração, o 
valor de alimento é uma das strings do array alimentos: 
maçãs
bananas
laranjas
 */


//6º Filter

//Primeiro exemplo:  Cria um novo array com todos os elementos que passam em um teste especificado por uma função.
const sequen = [1, 2, 3, 4, 5];
const sequenPares = sequen.filter(sequen => sequen % 2 === 0);
console.log(sequenPares);

/*Primeiro uma constante chamada sequen é criada e inicializada com um array contendo os números de 1 a 5.
Logo após, outra constante chamada sequenPares é criada. O método filter é usado no array sequen para criar um novo array 
contendo apenas os elementos pares. A função de callback sequen => sequen % 2 === 0 é usada para verificar se cada elemento é par. 
Se o resto da divisão do elemento por 2 for igual a 0, ele é considerado par e incluído no novo array.
Por fim, o resultado é impresso no console. O console exibirá [2, 4], que são os números pares do array original sequen.
*/


//Segundo exemplo: 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);

/*Primeiro uma constante chamada words é criada e inicializada com um array de strings contendo algumas palavras.
 Logo após, outra constante chamada result é criada. O método filter é usado no array words para criar um novo array contendo
apenas as palavras com mais de 6 caracteres. A função de callback (word) => word.length > 6 é usada para verificar se o 
comprimento de cada palavra é maior que 6. Se for, a palavra é incluída no novo array.
 Por fim, o resultado é impresso no console. O console exibirá ["exuberant", "destruction", "present"], que são as palavras do array 
original words com mais de 6 caracteres.
*/