const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo ao cadastro de imóveis\n" +
        "Total de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção\n1. Novo imóvel \n2. Listar imóveis \n\n 3. sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("informe o nome do proprietário do imóvel")
            imovel.quartos = prompt("informe a quantidade de quartos")
            imovel.banheiro = prompt("Quanto banheiros tem o imóvel")
            imovel.garagem = prompt("O imóvel possui garagem?")

            const confirmação = confirm(
                "Salvar este imóvel?\n" +
                "\nproprietario: " + imovel.proprietario +
                "\nquartos: " + imovel.quartos +
                "\nbanheiros: " + imovel.banheiro +
                "\npossui garagem?: " + imovel.garagem
                
            )
            
            if (confirmação) {
                imoveis.push(imovel)
            }

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                "imovel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem " + imoveis[i].garagem 
                    
            }
        case "3":
            alert("ENCERRANDO...")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== 3)