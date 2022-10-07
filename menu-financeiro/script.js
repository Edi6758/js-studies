let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma das opções abaixo" +
        "\n1. opção um" +
        "\n2. opção dois" +
        "\n3. opção três" +
        "\n4. opção quatro" +
        "\n5. encerrar"

    )

    switch (opcao) {
        case "1":
            alert("você escolheu a opção 1")
            break
        case "2":
            alert("você escolheu a opção 2")
            break
        case "3":
            alert("você escolheu a opção 3")
            break
        case "4":
            alert("você escolheu a opção 4")
            break
        case "5":
            alert("você escolheu a opção 5")
            break
    }

} while (opcao !== 5)