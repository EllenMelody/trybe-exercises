// Exercício 1

const a = 15
const b = 5
console.log(a+b);
console.log(a-b); 
console.log(a*b); 
console.log(a/b); 
console.log(a % b);
   
// Exercício 2
// Faça um cod que reterne o maior de dois numeros. Defina, no começo do programa, 
// duas const com os valores que serão comparados.

const a = 40;
const b = 23;
if (a > b) {
    console.log("'a' é maior que 'b'");
}else {
    console.log("'b'é maior que 'a'");
}

//Exercício 3
//Faça um cod q retorne o maior de tres numeros. 
//Defina, no começo do cod, 3 const com os valores que serão comparados.

const a = 10
const b = 20
const c = 30
if (a > b && a > c){
 console.log("'a' é maior que 'b' e 'c'");
}
else if (b > a && b > c){
 console.log("'b' é maior que 'a' e 'c'");
}else{
 console.log("'c' é maior que 'a' e 'b'");
}

// Exercício 4
//Faça um cod que, dado um valor definido numa const, retorne "positive" se esse valor for positivo,
//"negative" se for negativo e "zero", caso contrario.

const valor = 73;
if ( valor > 0){
 console.log("positive");
}else if (valor < 0){
  console.log("negative");
}else {
  console.log("zero");
}

//Exercício 5
//Faça um cod que defina 3 const com os valores dos 3 anguloa internos de um triangulo.
//Retorne 'true' se os angulos apresentarem os angulos de um triangulo e 'false', caso contrario.
//Se algum angulo for invalido o programa deve retornar uma msg de erro.

const anguloA = 60;
const anguloB = 60;
const anguloC = 60;

let angulosABC = anguloA + anguloB + anguloC;

if (angulosABC === 180){
  console.log('true');
}else if(angulosABC != 180){
  console.log('false');
}else{
  console.log('erro de angulo');
}

//Exercício 6
//Escreva um cod que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Copiei, mas entendi :)

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//Escreva um cod que converta uma nota dada em % de 0 a 100 em conceitos de A a F.

const porcent = 110;
if (porcent < 0 || porcent > 100){
  console.log('Erro');
}else if (porcent >= 90){
  console.log('conceito A');
}else if (porcent >= 80){
  console.log('conceito B');
}else if (porcent >= 70){
  console.log('conceito C');
}else if (porcent >= 60){
  console.log('conceito D');
}else if (porcent >= 50){
  console.log('conceito E');
}else{
  console.log('conceito F');
}

//Escreva um cod que defina 3 num em const e retorne 'true' se pelo menos uma das 3 for par.
//Caso contrario, ele retorna 'false'.
 
const num1 = 7
const num2 = 20
const num3 = 11

if(num1 %2 === 0 || num2 %2 === 0 || num3 %3 === 0){
  console.log('true');
}else{
  console.log('false');
}

//Escreva um cod que defina 3 num em const e retorne 'true' se pelo menos uma das 3 for impar.
//Caso contrario, ele retorna 'false'.

const num1 = 72
const num2 = 25
const num3 = 12

if(num1 %2 != 0 || num2 %2 != 0 || num3 %3 != 0){
  console.log('true');
}else{
  console.log('false');
}

