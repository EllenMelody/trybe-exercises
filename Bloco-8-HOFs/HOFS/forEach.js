const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião'];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


arrayNomes.forEach((nome, index, array) => {
  console.log(nome, index, array)
})

console.log(arrayNomes)

// function meuForEach(array, callback) { 
//   for (let i = 0; i < array.length; i+= 1) {
//     callback(array[i], i, array);
//   }

//   // Não tem retorno
// }

// meuForEach(arrayNomes, function(nome, i) {
//   console.log(nome, i)
// })

// console.log(arrayNomes)