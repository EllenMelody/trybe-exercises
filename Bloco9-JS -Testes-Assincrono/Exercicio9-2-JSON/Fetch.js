const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();

// Aqui demonstramos 2 coisas importantes sobre a sintaxe do .then() :
// 1 - Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do fetch .
// 2 - O .then() é usado "em cadeia", um conceito chamado de chaining . 
// Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o 
// retorno do anterior. A parte mais importante é que o .then() espera a resposta do fetch 
// (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();
// Note que para forçar o erro retiramos o https:// do início da url .



