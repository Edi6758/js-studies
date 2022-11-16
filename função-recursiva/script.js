function dividir(num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(40)

//40
//20
//10
//5

//aplicação real
// fatorial de 5 !5 === 5*4*3*2*1
function fatorial(num) {
    console.log("Número " + num)
    if (num === 0) {
        return 1
    } else if (num == 1) {
        return 1
    } else {
        console.log(num + " * ! " + (num - 1))
        return num*fatorial(num-1)
    }
}