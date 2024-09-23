alert("Pedra, papel, tesoura");
alert("Regras:")
alert("Pedra quebra tesoura\nTesoura corta papel\nPapel cobre pedra")
alert("Pedra: 1\n Tesoura: 2 \n Papel: 3");
alert("Faça a sua escolha");

escolha = prompt();

var escolhaComp = function(){
    a = Math.random();

    if (a <= 0.33){
        return 1;
    }if (a < 0.66) {
        return 2;
    } else {
        return 3;
    }
}

ep = escolhaComp();
alert("Escolha do computador: " + ep);

var dc = function(){
    if (ep == escolha ){
        return 1;
    }if (ep < escolha && ep-2 == escolha) {
        return 2;
    }else{
        return 3;
    }
}

var dc = function(){
    if (ep == escolha ){
        alert("Empate")
    }if (ep < escolha && ep-1 == escolha) {
        alert("COmputador ganhou")
    }else{
        alert("Jogador ganhou")
    }
}

// final = dc();
// switch (final){
//     case 1:
//         alert("Empate");
//         break;
//     case 2:
//         alert("Jogador ganha");
//         break;
//     case 3:
//         alert("Computador ganhou");
//         break;
// }

z = dc()
alert(z)