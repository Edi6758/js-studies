let saldo = parseFloat(prompt("Informe o valor de dinheiro inicial"))
let opcao = ""

do {
    opcao = prompt(
        "Saldo disponível: RS " + saldo +
        "\n1. adicionar dinehiro" +
        "\n2. remover dinehiro" +
        "\n3. sair"
    )
    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("INforme ao valor a ser adicionado"))
            break
        case "2":
            saldo -= parseFloat(prompt("INforme ao valor a ser removido"))
            break
        case "3":
            alert("saindo...")
            break
        default:
            alert("Opção inválida...")
    }
} while (opcao !== "3")