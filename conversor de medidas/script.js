const medida = prompt("Insira uma medida em metros: ");

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. milimetros (mm)" +
    "\n2. centímetros (cm)" +
    "\n3. decímetros (dm)" +
    "\n4. decâmetro (dam)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)"
);

switch (unidade) {
    case "1":
        alert("Resultado: " + "m = " + medida * 1000 + "mm");
        break
    case "2":
        alert("Resultado: " + "m = " + medida * 100 + "mm");
        break
    case "3":
        alert("Resultado: " + "m = " + medida * 10 + "mm");
        break
    case "4":
        alert("Resultado: " + "m = " + medida * 10 + "mm");
        break
    case "5":
        alert("Resultado: " + "m = " + medida * 100 + "mm");
        break
    case "6":
        alert("Resultado: " + "m = " + medida * 1000 + "mm");
        break
    default:
        alert("Opção inválida")
}
