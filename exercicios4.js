function Terreno(largura, comprimento) {
    this.largura = largura;
    this.comprimento = comprimento;
    this.area = largura*comprimento;    
}

Terreno.prototype.calculaPreco = function(){
     this.preco = 1000*this.area;
}

Terreno.prototype.mostrarInfos = function(){
    console.log("A area do terreno eh " + this.area +  " metros. E seu preco eh " + this.preco + " reais");    
}


var terreno1 = new Terreno(20, 30)
var terreno2 = new Terreno(30, 50)
var terreno3 = new Terreno(5, 13)
var terreno4 = new Terreno(33, 18)
var terreno5 = new Terreno(80, 327)

terreno1.calculaPreco()
terreno2.calculaPreco()
terreno3.calculaPreco()
terreno4.calculaPreco()
terreno5.calculaPreco()

console.log(terreno1.mostrarInfos());
console.log(terreno2.mostrarInfos());
console.log(terreno3.mostrarInfos());
console.log(terreno4.mostrarInfos());
console.log(terreno5.mostrarInfos());


var terrenos = []
terrenos.push(terreno1, terreno2, terreno3, terreno4, terreno5)

// console.log(terrenos);

// console.log(terrenos[2])

// for(const item of terrenos){   //'for in' vai iterar as propriedades do objeto. 'FOR OF' itera arrays. 
//     console.log(item.mostrarInfos());
// }

function ordenaTerrenos(arrTerrenos){
    const ordenados = arrTerrenos.sort(function(a, b){
        return a.preco - b.preco
    })
    console.log(ordenados[0], ordenados[ordenados.length - 1]);
    }
    
    ordenaTerrenos(terrenos)

    console.log();
    





