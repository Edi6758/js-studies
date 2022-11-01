function dobro(valor) {
    return valor*2
}

dobro(5)

function dizerOla(nome) {
    alert("Olá ", nome)
}

dizerOla("edi") 

//trabalhar com mtos parametores, forma errada
function muitosParametros(nome, telefone, endereco, aniversario, senha) {
    //pass
}

//forma certa...
function objetoComoParametro(usuario) {
    //pass
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    senha: ""
}

objetoComoParametro(dadosDoUsuario)