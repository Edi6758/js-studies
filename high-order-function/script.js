//high order function é uma função que recebe outra função como parâmetro 
//JS usa o paradigma funcional, paradigma voltado a função
//famosa callback

//HOF
function calcular(a,b, operacao) {
    const resultado = operacao(a,b)
    return resultado
}

function somar(x,y){
    return x + y
} 

calcular(3,5, somar)

calcular(8,4, function(x,y){
    return x-y
})