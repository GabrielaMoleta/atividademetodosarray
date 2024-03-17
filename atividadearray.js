//10 Métodos Array

//1ºSort

// Primeiro exemplo: O array frutas será ordenado alfabeticamente
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


// Segundo exemplo: O array numeros será ordenado de forma crescente. 
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

//Primeiro exemplo:  Cria um novo array com todos os elementos que passam em um teste de que os números precisam ser pares.
const sequen = [1, 2, 3, 4, 5];
const sequenPares = sequen.filter(sequen => sequen % 2 === 0);
console.log(sequenPares);

/*Primeiro uma constante chamada sequen é criada e inicializada com um array contendo os números de 1 a 5.
Logo após, outra constante chamada sequenPares é criada. O método filter é usado no array sequen para criar um novo array 
contendo apenas os elementos pares. A função de callback sequen => sequen % 2 === 0 é usada para verificar se cada elemento é par. 
Se o resto da divisão do elemento por 2 for igual a 0, ele é considerado par e incluído no novo array.
Por fim, o resultado é impresso no console. O console exibirá [2, 4], que são os números pares do array original sequen.
*/


//Segundo exemplo: Cria um novo array com todos os elementos que passaram no teste de que todas as palavras precisam ter 6 caracteres
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


//7º Map

//Primeiro exemplo: Cria um novo array com o resultado de uma função para descobrir o quadrado de cada número.
const n = [1, 2, 3];
const quadrados = n.map(n => n ** 2);
console.log(quadrados); 

/*Primeiro uma constante chamada n é criada e inicializada com um array contendo os números 1, 2 e 3.
Depois, outra constante chamada quadrados é criada. O método map é usado no array n para criar um novo array contendo os 
quadrados de cada número. A função de callback n => n ** 2 é usada para elevar cada número ao quadrado.
Por fim, o resultado é impresso no console. O console exibirá [1, 4, 9], que são os quadrados dos números do array original n.
*/


//Segundo exemplo: Converter Celsius em Fahrenheit.
const temperaturasCelsius = [0, 10, 20, 30, 40];

const temperaturasFahrenheit = temperaturasCelsius.map(celsius => (celsius * 9/5) + 32);

console.log(temperaturasFahrenheit);

/*Primeiro uma constante chamada temperaturasCelsius é criada e inicializada com um array contendo as temperaturas em graus Celsius.
outra constante chamada temperaturasFahrenheit é criada. O método map é usado no array temperaturasCelsius para criar um novo array 
contendo as temperaturas convertidas para Fahrenheit. A função de callback celsius => (celsius * 9/5) + 32 é usada para realizar a 
conversão de cada temperatura de Celsius para Fahrenheit.
 Por fim, o resultado é impresso no console. O console exibirá as temperaturas convertidas para Fahrenheit, correspondentes às
temperaturas em Celsius do array original temperaturasCelsius: [ 32, 50, 68, 86, 104 ]
*/


//8º Reduce

//Primeiro exemplo: Somar todos os elementos de um array
const nm = [1, 2, 3, 4, 5];
const soma = nm.reduce((acumulador, nm) => acumulador + nm, 0);
console.log(soma); 

/*Primeiro uma constante chamada nm é criada e inicializada com um array contendo os números de 1 a 5.
Depois outra constante chamada soma é criada. O método reduce é usado no array nm para somar todos os elementos do array. 
A função de callback (acumulador, nm) => acumulador + nm é usada para somar o valor atual do acumulador com cada elemento do array, 
iniciando com um valor inicial de acumulador de 0.
Por fim, o resultado da soma é impresso no console. O console exibirá 15, que é a soma dos números do array original nm.
*/


//Segundo exemplo: Encontrando o maior valor de um array
const numbers = [10, 5, 8, 2, 15];

const maiorValor = numbers.reduce((acumulador, elemento) => { return Math.max(acumulador, elemento); });

console.log(maiorValor); 

/*Primeiro uma constante chamada numbers é criada e inicializada com um array contendo alguns números.
Logo após outra constante chamada maiorValor é criada. O método reduce é usado no array numbers para encontrar o maior valor no array.
A função de callback (acumulador, elemento) => { return Math.max(acumulador, elemento); } é usada para comparar cada elemento com o
acumulador atual e retornar o maior valor. O Math.max é usado para obter o maior valor entre o acumulador e o elemento atual.
Por fim, o maior valor é impresso no console. O console exibirá 15, que é o maior valor no array original numbers.
*/


//9º Some

//Primeiro exemplo: Verifica se pelo menos um elemento do array satisfaz a condição especificada por uma função: pelo menos um elemnto tem que ser par.
const number1 = [1, 2, 3, 4, 5];
const temPar = number1.some(number1 => number1 % 2 === 0);
console.log(temPar); 

/*Primeiro uma constante chamada number1 é criada e inicializada com um array contendo os números de 1 a 5.
Logo após, outra constante chamada temPar é criada. O método some é usado no array number1 para verificar se pelo menos um dos elementos é par.
 A função de callback number1 => number1 % 2 === 0 é usada para verificar se o elemento é par (o resto da divisão por 2 é igual a 0).
 Por fim, o resultado da verificação é impresso no console. O console exibirá true, indicando que há pelo menos um número par no array original number1.
*/

 //Segundo exemplo: verificar se algum dos elementos de um array de strings contém a letra 'a'

 const comidas = ['banana', 'pequi', 'laranja', 'coco'];
const temA = comidas.some(comidas => comidas.includes('a'));
console.log(temA); // true

/*Primeiro uma constante chamada palavras é criada e inicializada com um array de strings contendo algumas frutas.
outra constante chamada temA é criada. O método some é usado no array palavras para verificar se pelo menos uma das palavras contém a letra 'a'. 
A função de callback palavra => palavra.includes('a') é usada para verificar se a palavra contém a letra 'a', usando o método includes.
Por fim, o resultado da verificação é impresso no console. O console exibirá true, pois tanto "banana" quanto "laranja" contêm a letra 'a'.
*/


//10º Every

//Primeiro exemplo: Verifica se todos os elementos do array são pares.
const numeros1 = [1, 2, 3, 4, 5];
const saoPares = numeros1.every(numero1 => numero1 % 2 === 0);
console.log(saoPares); 

/*Primeiro uma constante chamada numeros1 é criada e inicializada com um array contendo os números de 1 a 5.
Depois, outra constante chamada saoPares é criada. O método every é usado no array numeros1 para verificar se todos os elementos são pares. 
A função de callback numero1 => numero1 % 2 === 0 é usada para verificar se cada número é par (o resto da divisão por 2 é igual a 0).
Por fim, o resultado da verificação é impresso no console. O console exibirá false, pois nem todos os números do array original numeros1 
são pares (apenas o 2 e o 4 são pares).*/


//Segundo exemplo: Verificar se cada elemento do array é maior que zero
let numbers2 = [1, 3, 5];
let resultad = numbers2.every(function (e) {
  return e > 0;
});

console.log(resultad);

/*Primeiro uma variável numbers2 é criada e inicializada com um array contendo os números 1, 3 e 5.
Depois, outra variável resultad é criada. O método every é usado no array numbers2 para verificar se todos os elementos são maiores que zero. 
Uma função de callback é passada para o every, que recebe um parâmetro e representando cada elemento do array. A função retorna true 
se o elemento for maior que zero e false caso contrário.
Por fim, o resultado da verificação é impresso no console. O console exibirá true, pois todos os números no array original numbers2 são maiores que zero.
*/


//Splice

//Adicionando elementos usando splice:
const fruit = ['apple', 'banana', 'cherry'];
fruit.splice(2, 0, 'orange'); // Adiciona 'orange' na posição 2
console.log(fruit); // Output: ['apple', 'banana', 'orange', 'cherry']

/*Primeiro uma constante chamada fruit é criada e inicializada com um array contendo três frutas: 'apple', 'banana' e 'cherry'.
O método splice é chamado no array fruit. Ele recebe três argumentos: o primeiro é a posição onde a modificação será feita 
(2, neste caso, indicando a posição após 'banana'), o segundo é a quantidade de elementos a serem removidos (0, indicando que nenhum elemento será removido) 
e o terceiro é o elemento a ser adicionado ('orange').
Por último, o console exibirá ['apple', 'banana', 'orange', 'cherry'], pois 'orange' foi adicionado na posição 2, deslocando 'cherry' para a próxima posição.
*/

//Removendo elementos usando splice:
const numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(2, 2); 
console.log(numbers3); 

/* Primeiro uma constante chamada numbers3 é criada e inicializada com um array contendo os números de 1 a 5.
O método splice é usado no array numbers3. Ele remove 2 elementos a partir da posição 2 do array. Após essa operação, o array numbers3 ficará como [1, 2, 5], 
pois os elementos 3 e 4 foram removidos.
Por fim, o resultado após a remoção dos elementos é impresso no console. O console exibirá [1, 2, 5], que é o array resultante após a remoção dos elementos.
*/

//Substituindo elementos usando splice:
const cor = ['red', 'green', 'blue'];
cor.splice(1, 1, 'yellow');
console.log(cor); 

/*Primeiro uma constante chamada cor é criada e inicializada com um array contendo três strings representando cores.
O método splice é chamado no array cor. Ele remove um elemento a partir da posição 1 (o segundo elemento, 'green') e, em seguida, insere 'yellow' nessa mesma posição.
O array cor após a modificação é então impresso no console. O console exibirá ['red', 'yellow', 'blue'], que é o resultado após a substituição de 'green' por 'yellow' no array cor.
*/

