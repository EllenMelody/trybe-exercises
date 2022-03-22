const arrayNomes = ['Gustavo', 'Astolfo', 'Beatriz', 'Carlos', 'Damião'];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


const findRetorno = arrayNomes.find((nome) => {
  console.log(nome)
  return nome === 'Beatriz';
});

console.log(findRetorno);


// function meuFind(array, callback) {
//   let nomeParaRetornar;
  
//   for (let i = 0; i < array.length; i+= 1) {
//     if (callback(array[i], i, array)) nomeParaRetornar = array[i]
//   }

//   return nomeParaRetornar;
// }

// const retornoMeuFind = meuFind(arrayNomes, (nome) => nome === 'Damião');
// console.log(retornoMeuFind)


