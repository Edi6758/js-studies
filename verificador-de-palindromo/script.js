const palavra = prompt("INforme uma palavra:")
let palavraInvertida = ""

// macarrao
for (let i = palavra.length - 1; i >= 0; i++){
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palidromo...")
} else {
    alert(palavra + " não é um palidromo.... "+ palavra, palavraInvertida)
}