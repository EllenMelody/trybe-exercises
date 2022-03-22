const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião'];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const retornoFilter = arrayNomes.filter((nome) => {
  return nome.includes('s');
})

console.log(retornoFilter)


// function meuFilter(array, callback) {
//   const arrayNomesParaRetornar  = [];
  
//   for (let i = 0; i < array.length; i+= 1) {
//     if (callback(array[i], i, array)) arrayNomesParaRetornar.push(array[i])
//   }

//   return arrayNomesParaRetornar;
// }

// const retornoMeuFilter = meuFilter(arrayNomes, (nome) => {
//   return nome.includes('s')
// });

// console.log(retornoFilter)