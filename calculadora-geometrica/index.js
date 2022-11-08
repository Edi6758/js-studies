function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triangulo:")
    const altura = prompt("Informe a altura do triângulo:")
    return (base * altura)/2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapezio"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio"))
    const altura = parseFloat(prompt("Informe a altura do trapêzio: "))
    return(baseMaior + baseMenor)*altura/2
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do círculo:")
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "Calculadora Geométrica\n" +
        "1. calcular área de triângulo\n" +
        "2. calcular área de retângulo\n" +
        "3. calcular área de quadrado\n" +
        "4. calcular área de trapézio\n" +
        "5. calcular área de círculo\n" +
        "6. sair\n" 
        
    )
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":                
        }
    } while (opcao !== "6")
}

executar()