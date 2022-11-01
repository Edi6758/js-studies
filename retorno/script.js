function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

calcularMedia(6, 8)

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

//usando uma função como retorno de outra função

function areaRetangular(base, altura) {
    return base * altura
}

function areaQuadrado(lado) {
    return areaRetangular(lado, lado)
}

//uma função so retorna 1 vez
//em casos de condicionais vc pode ter mais de um retorno

function maioridade(idade) {
    if (idade >= 18) {
        return 'Maior idade'
    } else {
        return 'Menor idade'
    }
}