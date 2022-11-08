let pessoa = {
    nome: "edi",
    idade: 25,
    dizerOLa() {
        console.log("OLá mundo... meu nome é "+ this.nome)
    }
}

pessoa.dizerOLa()