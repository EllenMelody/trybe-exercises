// Faça uma lista com as suas frutas favoritas
// Faça uma lista de complementos que você gostaria de adicionar
// faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas

// Spread (...A, ...B)
const specialFruit = ['banana', 'maça', 'laranja'];
const additionalItens = ['açucar', 'canela', 'leite condensado'];
const fruitSalad = [...specialFruit, ...additionalItens];
// console.log(fruitSalad);

// Você verá que independente do número de argumentos passados, a função irá executar a soma.

// Parâmetro Rest
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60, 99)); 

// Object Destructuring
//  sintaxe da desestruturação de objetos pede para passarmos o 
// nome das propriedades que queremos acessar do lado esquerdo, 
// entre chaves, e o objeto do lado direito:
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
  const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//   Spread com Object Destructuring
  const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
  const { workDays, weekend } = daysOfWeek;
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']
  
  const weekdays = [...workDays, ...weekend];
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
 
//   você pode reatribuir o nome da propriedade que deseja acessar 
// ao declará-la como uma variável.
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
  const { a: name, b: classAssigned, c: subject } = student;
  
//   console.log(name); // Maria
//   console.log(classAssigned); // Turma B
//   console.log(subject); // Matemática

//  1 - Precisamos criar um terceiro objeto, que terá os dados pessoais 
// e os dados de cargo juntos. 
  const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const userJobInfos = {...user, ...jobInfos};

// 2 - Com o objeto em mãos, imprima no console uma frase 
// utilizando os dados do objeto criado anteriormente. 
// Para isso, utilize a desestruturação de objetos em conjunto 
// com template literals .

console.log(`My name is ${user.name}, I have ${user.age} years. I am ${user.nationality}. I Work with ${jobInfos.profession}`);

// 