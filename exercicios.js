let r = require("readline-sync");

//----------------------- 1 ------------------------------------------------------

// const xx = [23, 43, 63 ,73, 83, 93, 102]

// for (i=0; i < xx.length; i++){
    
//     console.log(xx[i])
// }

//------------------------- 2 ------------------------------------------------------

// doces = ['sorvete', 'pirulito', 'bombom']

// var adicionar = doces.unshift('Caramelo')

// console.log(doces)


//------------------------------- 3 ------------------------------------------------

// const doces = ['sorvete', 'pirulito', 'bombom'];

// var adicionar = doces.push('Caramelo')

// console.log(doces)


//------------------------------------- 4 ---------------------------------------------

// bandasEmo = ['fresno', 'linkin park', 'blink182', 'dance of days']

// bandasEmo.reverse();

// console.log(bandasEmo)


//---------------------------------------- 5 -----------------------------------------------

// array = [23, 45, 13, 71];

// array.splice(2, 0, 11);

// console.log(array)


//---------------------------------------- 6 -------------------------------------------------

// array = [23, 45, 13, 71];

// array.splice(1, 1);

// console.log(array)



//---------------------------------------- 7 -----------------------------------------------------

// let array = []

// for (i=0; i<20; i++){

//     if (i % 2 != 0){
//     array.push(i)
//     console.log(i)
//     }
// }


                      //-------------------------outro metodo

// var count = 0
// const array = []
// for (let i=1; i<20; i++){

//         if (i % 2 != 0){
//         array.push(i)
//             count++
        
//         }
//     }
//     console.log(array)


//---------------------------------------- 8 -----------------------------------------------------


// const x = [23, 43, 63 ,73, 83, 93, 102];

// const novaarray = []

// for(i = 0; i < x.length - 1; i++){
//     novaarray.push(x[i] + 2)
// }

// console.log(novaarray)


//-------------------------------------- 9 ---------------------------------------------------------


// const lista = [56, 89, 34, 12, 23, 55, 9]

// lista.sort(function(a,b){return a-b});
// console.log(lista)

              //--------------------outro metodo

const lista = [56, 89, 34, 12, 23, 55, 9]

for (let i=0; i< lista.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] > lista[j + 1]) {
            const auxiliar = lista[j]
            lista[j] = lista[j+1]
            lista[j +1] = auxiliar

        }
    }

}

console.log(lista)







