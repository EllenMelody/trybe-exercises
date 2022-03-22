
const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];


// Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
let arrayNomesPares = [];

techProducts.forEach((elemento, index) => {
    if (elemento.id % 2 === 0) {
        arrayNomesPares.push(elemento.name);
    }
});
console.log(arrayNomesPares);

// Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
const result = (id, quantidade) => { 
    const idEscolhido = techProducts.find((product) => id === product.id);
    return idEscolhido.price * quantidade;
}
console.log(result(1, 3));


// Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
console.log(techProducts.some((element) => element.price > 300));
