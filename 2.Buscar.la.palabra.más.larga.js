//2: Buscar la palabra más larga

//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

//const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
//function findLongestWord(param) {
//    // insert code
//  }

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longestWord = "";

function getlongestWord(param) {

    for (const element of param) {

        if (longestWord.length < element.length) {
            longestWord = element;
        }
    }
    return longestWord;
}

const resultado = getlongestWord(avengers);
console.log(resultado);
