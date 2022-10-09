//inicialização
//condição
//finalização
for (let i = 0; i <= 10; i++){
    alert("indice igual a "+ i)
}

//uma forma meio doida de declarar o for
let indice = 0;

for (
    alert("Inicializando o for");
    indice <= 10;
    alert("finaçlizando o for")
) {
    alert("indice igual a "+ indice)
    indice++
}

//outra forma meio doida

for ( ;indice <= 10;) {
    alert("indice igual a "+ indice)
    indice++
}

//outra forma...

for (;;) {
    alert("indice igual a "+ indice)
    indice++
}