const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião'];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const returnoEvery = arrayNomes.every((elemento) => typeof elemento === 'string');
console.log(returnoEvery);

// function meuEvery(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     const itemDoArray = array[i];
//     if (!callback(itemDoArray, i, array)) return false;
//   }

//   return true;
// }

// const retornoMeuEvery = meuEvery(arrayNomes, (elemento) => {
//   return typeof elemento === 'string';
// })
// console.log(retornoMeuEvery)