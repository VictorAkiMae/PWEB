function funcao1(num1,num2,num3){
    res1 = num1 && num2;
    res2 = res1 && num3;
    res3 = re2;

    return "O mais velho é: " + re3;
}

function funcao2(num1,num2,num3){
    menor, maior;

    menor = num1>num2?num1:num2;
}

function palindromo(){
    var fraseA = document.getElementById("frase").value;

    var fraseB = fraseA.reverse();
    return (fraseA===fraseB?"É palíndromo":"Não é palíndromo");
}

function funcao4(num1,num2,num3){

}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
});