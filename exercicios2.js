let r = require("readline-sync");


// ------------------------------------- 1 ------------------------------------------------------

// const array = [];
// let count = 1;

// for (let i=0; i<5; i++){
//     const linha = []
//     for (j=0; j<5; j++){
//         linha[j] = count;
//         count++
//     }
//     array[i] = linha;
// }

// console.log(array)


// // ----------------------------------- 2 -------------------------------------------

// const array = [];
// let count = 25;

// for (let i=0; i<5; i++){
//     const linha = []
//     for (j=0; j<5; j++){
//         linha[j] = count;
//         count--
//     }
//     array[i] = linha;
// }

// console.log(array)

// ----------------------------------- 3 -------------------------------------------------------


// let arr4x4 = [[23, 56, 9, 0],
//                 [8, 24, 50, 5], 
//                 [9, 10, 40, 7], 
//                 [9, 48, 15, 2]]

//     for (let i=0; arr4x4.length<4; i++){
//         let linha = 0
//         for (j=0; j<arr4x4.length; j++){
//             linha+= arr4x4[i][j]
//         }
    
//     soma.push(linha)
//     console.log(soma)
// }

// console.log(Math.max(...soma))


// ------------------------------------- 4 ----------------------------------------

// const dados = [
//       ["Antonia Maria", "ar@gol.com", "Engenheira"],
//       ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
//       ["Juliana Paes", "argh@gol.com", "Advogada"],
//       ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
//       ["MARINA BATISTA", "marina@gol.com", "professora"],
//       ["Antonia Maria", "ari@gol.com", "cientista"]
//     ]

    // for (let i=0; i<dados.length; i++){
    //      let linha = dados.join(',')
    //      var outro = linha.toLowerCase()
    //      var um = outro.split(',')
    //         for (j=0; j<dados.length; j++){
                
    //         um+= dados[i][j]

    //         console.log(um)
    //     }
        
    // }

//   var array = dados.join(',')

//  var outro = array.toLowerCase()

// console.log(array)


// var um = outro.split(',', 3)

//  console.log(um)


// ------------------------------------- 7 ----------------------------------------



const cacaPalavras = [
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
]

const palavras = ["elefante", "casa", "rede"]

// let elefante = palavras[0].split('')
// let casa = palavras[1].split('')
// let rede = palavras[2].split('')

// let resp = cacaPalavras.indexOf()

// console.log(elefante)

let cacaPalavrasJuntas = cacaPalavras.join()



for (i=0; i<cacaPalavras.length; i++){
    cacaPalavras[i] = cacaPalavras[i].join('')
        for (j = 0; j < palavras.length; j++){
        if (cacaPalavras[i].indexOf(palavras[j]> -1)){
            console.log(cacaPalavras[i].indexOf(palavras[j]> -1))
        
        }
    

    }

}

// console.log()
