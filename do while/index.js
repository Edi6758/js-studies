//ele força que a primeira execução seja verdadeira
let velocidade = 0

do {
    alert(`a velocidade do veículo é ${velocidade}`)
    velocidade -= 20
} while (velocidade > 0)

alert("Velocidade final: " + velocidade)