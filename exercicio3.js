// ------------------------------- 1 -----------------------------------------

const pokemon = {
    'nome': 'Charmander',
    'nomeJapa': 'ヒトカゲ',
    'cauda': true,
    'evolucao': 'Charmilion',
    'sabe_voar': false,

    soltarFogo : function(){
        console.log(pokemon.nome + " FOGO!!!!")
    },

    voar : function(){
        if (pokemon.sabe_voar == true){
            console.log('To voaaaaaando!')
        }else{
            console.log('Desculpa, nao sei voar! ');            
        }
    },

    action : function(){
        
        var resp = ["FIGHT", "BAG", "RUN", "falar", "cair", "chamar"]
        
        var rand = resp[Math.floor(Math.random() * resp.length)];

        console.log(rand);        
    },

    pergunta : function(){
        console.log('O que o ' + pokemon.nome + ' vai fazer?')
         pokemon.action() 
    }

}

pokemon.soltarFogo()

console.log('oi, meu nome eh ' + pokemon.nome)
console.log('e meu nome em japones eh ' + pokemon.nomeJapa)

pokemon.voar()

pokemon.action()

pokemon.pergunta()

console.log(pokemon);
