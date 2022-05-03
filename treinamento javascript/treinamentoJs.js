//declarando variáveis
function func01(){
    var x = 10; //variável local porque tem o  "var" sendo declarado
    y= 20;// variavel global
    alert(x);
    alert(y);

}
// nesse caso, a variavel X só existe nessa funçao, ou seja, uma variavel local
// Y aqui é uma varivel globl, podendo ser usado dentro do script.

func01();//chamada da função

function func02(){
    y++; //esse código pega o valor da variavel Y, e soma mais 1 a ese codigo
    alert(y);//acessivel
    alert(x);// nao acessivel
}
func02();