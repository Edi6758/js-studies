let comecarLuta = () => {
    const jogador = {
        inputNome: document.querySelector("#inputNome").value,
        pontosDeVida: Math.random() * 100,
        poderDeDefesa: Math.random() * 100,
        temEscudo: Math.floor(Math.random() * 2)
    };

    let validacaoEscudoJogador = jogador.temEscudo > 0 ? "sim" : "não"
    let validacaoEscudoInimigo = jogador.temEscudo > 0 ? "sim" : "não"

    const inimigo = {
        inputNome: "village",
        pontosDeVida: Math.random() * 100,
        poderDeDefesa: Math.random() * 100,
        temEscudo: Math.random() * 2
    };

    let printJogador = `
    Nome do jogador: ${jogador.inputNome}\n
    pontos de vida ${jogador.pontosDeVida}\n
    pontos de defesa: ${jogador.poderDeDefesa}\n
    escudo: ${validacaoEscudoJogador }
    `;
    let printInimigo = `
    Nome do jogador: ${inimigo.inputNome}\n
    pontos de vida ${inimigo.pontosDeVida}\n
    pontos de defesa: ${inimigo.poderDeDefesa}\n
    escudo: ${validacaoEscudoInimigo }
    `;

    document.querySelector("#infostext1").value = printJogador
    document.querySelector("#infostext2").value = printInimigo
};
