const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas do baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n Sair"
    )
    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = barulho.pop()
            if (!cartaPuxada) {
                alert("Não existe nenhuma carta do baralho")
            } else {
                alert("Você puxou um(a) " + cartaPuxada)
            }
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opcao !== "3")