const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião', 1];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const retornoSome = arrayNomes.some((elemento) => typeof elemento === 'number');
console.log(retornoSome)

// function meuSome(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     const itemDoArray = array[i];
//     if (callback(itemDoArray, i, array)) return true;
//   }

//   return false;
// }

// const retornoMeuEvery = meuSome(arrayNomes, (elemento) => {
//   return typeof elemento === 'number';
// })

// console.log(retornoMeuEvery)