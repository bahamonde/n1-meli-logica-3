const alunas = []
let id = 0

function criarAluna( nome, dataDeNasc, SP){     
    alunas.push(new aluna(++id, nome, dataDeNasc, SP)) // ++ antes para já chegar somando e nao só depois do 0
    console.log(alunas)
}

function aluna(nome, dataNasc, SP){
    this.id = id
    this.nome = nome
    this.dataNasc = dataNasc
    this.SP = SP
}


