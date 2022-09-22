let Enviar = () => {
    const usuario = {
        inputNome : document.querySelector("#nomeId").value,
        inputSobrenome : document.querySelector("#sobrenomeId").value,
        inputcampoDeEstudoId : document.querySelector("#campoDeEstudoId").value,
        inputDateTime : document.querySelector("#dataId").value
    }
    
    let anoAtual = new Date().getFullYear()
    let anoConvertido = usuario.inputDateTime.slice(0,4)
    let idadeAtual = (parseInt(anoAtual) - parseInt(anoConvertido))

    let printUsuario = `
        Nome do usuário: ${usuario.inputNome}\n
        Sobrenome do usuário: ${usuario.inputSobrenome}\n
        Campo de estudo: ${usuario.inputcampoDeEstudoId}\n
        Data de nascimento: ${usuario.inputDateTime}\n
        Idade: ${idadeAtual} anos
    `

    document.querySelector("#resultado").value = printUsuario
}