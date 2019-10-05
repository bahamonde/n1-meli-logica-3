// ------------------------ 1 -------------------------------------------------------

// const numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]

// function multiplos3(value){
//     return value%3 == 0;
// }

// function multiplos3e5(value){
//     return value % 3 == 0 && value % 5 ==0;
// }

// const resul = numbers.filter(multiplos3)
// const resul1 = numbers.filter(multiplos3e5)
 
// console.log(resul);
// console.log(resul1);


// ------------------------------------- 2 -------------------------------

// const palavrinhas = [
//   "bolacha",
//   "biscoito",
//   "bombom",
//   "bala",
//   "abestalhado",
//   "MASSA",
//   "pastilha"
// ]

// const resul = palavrinhas.filter(function(palavras){
//     return palavras.length < 5
// })

// console.log(resul);


// ------------------------------- 3 -----------------------------


// const numbers = [3, 4, 5, 6, 6, 7]

// const array = numbers.map(function(item){
//     return item * 3
// })


// const resul = array.filter(function(numeros){
//         return numeros > 10
// })

//  const resul2 = array.filter(function(numeros){
//     return numeros < 10
// })

// console.log(array);
// console.log(resul.length)
// console.log(resul2.length)

// USANDO ARROW FUNCTION

// const qq = array.filter(item => item > 10)
// console.log(array);
// console.log(array.length);



// ------------------------------------ 4 ---------------------------------------

// const numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]

// const valorTotal = numbers.reduce(function(total, num){
//     return total + num
// })
// console.log(valorTotal);

// // OUTRA MANEIRA COM ARROW FUNCTION

// const valorTotal = numbers.reduce((total, num) => total + num);

// console.log(valorTotal);


// -------------------------------- 5 ---------------------

const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

const numUser = mulheres.find(item => item.user === 238)
console.log(numUser.name);


const estudiosas = mulheres.filter(item => item.hobbies.indexOf('estudar') > -1)

console.log(estudiosas);

// para mostrar pelos nomes das estudiosas
estudiosas.map(item => {
    console.log(item.name)
})






