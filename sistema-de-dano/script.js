const jogador = {
    inputNome: document.querySelector("#inputNome").value,
    pontosDeVida: Math.random() * 100,
    poderDeDefesa: Math.random() * 100,
    poderDeAtk: Math.random() * 100,
    temEscudo: Math.floor(Math.random() * 2)
};

const inimigo = {
    inputNome: "village",
    pontosDeVida: Math.random() * 100,
    poderDeDefesa: Math.random() * 100,
    poderDeAtk: Math.random() * 100,
    temEscudo: Math.random() * 2
};

let validacaoEscudoJogador = jogador.temEscudo > 0 ? "sim" : "não"
let validacaoEscudoInimigo = jogador.temEscudo > 0 ? "sim" : "não"

let comecarLuta = () => {

    let printJogador = `
    Nome do jogador: ${jogador.inputNome}\n
    pontos de vida ${jogador.pontosDeVida}\n
    pontos de defesa: ${jogador.poderDeDefesa}\n
    pontos de ATK: ${jogador.poderDeAtk}\n
    escudo: ${validacaoEscudoJogador}
    `;
    let printInimigo = `
    Nome do jogador: ${inimigo.inputNome}\n
    pontos de vida ${inimigo.pontosDeVida}\n
    pontos de defesa: ${inimigo.poderDeDefesa}\n
    pontos de ATK: ${inimigo.poderDeAtk}\n
    escudo: ${validacaoEscudoInimigo}
    `;

    document.querySelector("#infostext1").value = printJogador
    document.querySelector("#infostext2").value = printInimigo
};

let duelar = () => {
    let vidaAtualJogador = jogador.pontosDeVida
    let vidaAtualInimigo = inimigo.pontosDeVida
    if (validacaoEscudoJogador == "sim") {
        vidaAtualJogador = jogador.pontosDeVida - (inimigo.poderDeAtk / 2)
    } else {
        vidaAtualJogador = jogador.pontosDeVida - inimigo.poderDeAtk
    }

    if (validacaoEscudoInimigo == "sim") {
        vidaAtualInimigo = inimigo.pontosDeVida - (jogador.poderDeAtk / 2)
    } else {
        vidaAtualInimigo = inimigo.pontosDeVida - jogador.poderDeAtk
    }

    if (vidaAtualJogador <= 0) {
        alert("VOCÊ PERDEU!!!")
        location.reload()
    } else if (vidaAtualInimigo <= 0) {
        alert("VOCÊ GANHOU!!!")
        location.reload()
    }

    let relatorioDeVida = `
    Vida do jogador: ${vidaAtualJogador}\n
    Vida do inimigo ${vidaAtualInimigo}\n
    `;

    document.querySelector("#inputDano").value = relatorioDeVida
}
