const personagens = [
    {nivel: 32, nome: 'joao', raca: 'orc', classe: "xama"},
    {nivel: 132, nome: 'rafa', raca: 'orc', classe: "guerreiro"},
    {nivel: 52, nome: 'pedro', raca: 'humano', classe: "guerreiro"},
    {nivel: 22, nome: 'lucas', raca: 'humano', classe: "guerreiro"},
    {nivel: 17, nome: 'gabi', raca: 'orc', classe: "mago"},
    {nivel: 39, nome: 'natan', raca: 'elfo', classe: "arqueiro"}
]

//map
//pega um array e cria um novo array baseado nele
const nomes = []
for (let i = 0; i < personagens.length; i++ ) {
    nomes.push(personagens[i].nome)
}

const nomes2 = []
nomes2 = personagens.map(function (personagens) {
    return personagens.nome
})

//filter
//pega alementos especificos e cria um array novo

const orcs = []
for (let i = 0; i < personagens.length; i++){
    if(personagens[i].raca === "orc") {
        orcs.push(personagens[i])
    }
}

const orcs2 = personagens.filter(function(personagens) {
    return personagens.raca === 'Orc'
})

//reduce 
//ele transforma um array em algum valor
//por exemplo, somar os elementos do array
const nivelTotal = personagens.reduce(function(valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

//sort
//ordena arrays
//pega os alementos e posiciona de acordo com algum critério...
//altera o array original
//faz uma comparação em pares
//1,2,4,7,3,0
personagens.sort(function(a,b){
    return a.nivel - b.nivel //se a for positivo ele vai jogar mais pro final do array
    //inverter os números a - b pra b -a inverte o array
})

//como ordenar ser alterar o array usando o slice()
let perssonagensAlterados = personagens.slice().sort(function(a,b){
    return a.nivel - b.nivel
})