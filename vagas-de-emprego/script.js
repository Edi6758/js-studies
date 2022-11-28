const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const name = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição " + descricao + "\nData limite:" + dataLimite
    )

    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite } //nome:nome, descricao:descricao, dataLimite:dataLimite
        vagas.push(novaVaga)
        alert("Vaga criado.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice de vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga n " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidatos = prompt("Informe o nome do(a) candidatos(a):")
    const indice = prompt("Informe o índice da vaga para o qual o(a) candidatos(a) deseja se inscrever")
    const vaga = vaga[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidatos + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que você deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída!")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de vagas de emprego" +
        "\n\nEscolha uma das opções:" +
        "\n 1. Listar vagas disponíveis" +
        "\n 2. Criar uma nova vaga" +
        "\n 3. Inscrever um(a) candidato(a)" +
        "\n 4. Listar vagas disponíveis" +
        "\n 5. Excluir uma vaga" +
        "\n Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida")
        }
    } while (opcao !== "6")
}

executar()