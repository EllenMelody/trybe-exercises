let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ex1
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

// for (let index = 0; index < numbers.length; index += 1) {
// console.log(numbers[index]);
//   }

//Ex2
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
  }
console.log(soma);

//Ex3
// Para o terceiro exercício, calcule e imprima a média 
// aritmética dos valores contidos no array

let soma = 0;
for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
};
let media = soma / numbers.length;
  
console.log(media);

//Ex4
// Com o mesmo código do exercício anterior, caso o valor 
// final seja maior que 20, imprima a mensagem: "valor maior 
// que 20". Caso não seja, imprima a mensagem: "valor menor 
// ou igual a 20";

let soma = 0;
for (let index = 0; index < numbers.length; index  +=1) {
    soma += numbers[index];
}
let media = soma / numbers.length;
if (media > 20){
    console.log ('Valor maior que 20')
}else{
    console.log('Valor menor que 20');
}
  
// Ex5
// Utilizando for , descubra qual o maior valor contido no 
// array e imprima-o;

let maiorValor = numbers[0];
for (let index = 1; index < numbers.length; index +=1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}
console.log(maiorValor);

// Ex6
// Descubra quantos valores ímpares existem no array e 
// imprima o resultado. Caso não exista nenhum, imprima a 
// mensagem: "nenhum valor ímpar encontrado";

let numPrimo = 0;
for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] %2 !== 0) {
        numPrimo += 1;
        
    }
}    
  if (numPrimo === 0) {
     console.log('Nenhum valor ímpar encontrado'); 
  }  else{
      console.log(numPrimo);
  }

//Ex7
// Utilizando for , descubra qual o menor valor contido no 
// array e imprima-o;

let menorValor  = numbers[0]
for (let index = 1; index < numbers.length; index +=1) {
    if (numbers[index] < menorValor){
    menorValor = numbers[index];
 }
}
console.log(menorValor);

// Ex8
// Utilizando for , crie um array que vá de 1 até 25 e 
// imprima o resultado;

let num = [];
for (let index = 1; index <= 25; index +=1) {
    numbers.push(index);
}
console.log(numbers);

// Ex9
// Utilizando o array criado no exercício anterior imprima 
// o resultado da divisão de cada um dos elementos por 2 .

let num = [];
for (let index = 0; index <= numbers.length; index +=1) {
    console.log(numbers[index] / 2);
}
