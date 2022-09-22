let botao = document.getElementsByClassName('mybutton')[0];
botao.onclick = function(e){
    let num1 =  Number(document.getElementById('num1').value);
    let num2 =  Number(document.getElementById('num2').value);
    let oper = document.getElementById('oper').value;
    if (oper === '+'){
        alert(num1 + num2);
    } else if(oper === '-'){
        alert(num1 - num2);
    } else if( oper === '/'){
        alert(num1 / num2);
    } else if (oper === '*') {
        alert(num1 * num2);
    } else {
        alert('operação inválida');
    }
    e.preventDefault();
}