function calcularIMC() {
    var altura = document.getElementsByClassName("altura")[0].value;
    var peso = document.getElementsByClassName("peso")[0].value;

    if (peso && altura) {
        altura = parseFloat(altura);
        peso = parseFloat(peso);
        
        var imc = calcIMC(peso, altura);
        document.getElementById("resultado").innerText = "O seu IMC é: " + imc.toFixed(2);
        
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    }
}

function calcIMC(peso, altura) {
    return peso / (altura * altura);
}
//IMC = peso (kg) / [altura (m)]²

function abreTabela() {
    fetch('tabela.html')
        .then(response => response.text()) 
        .then(data => {
            document.getElementById('conteudoTabela').innerHTML = data; 
        })
        .catch(error => console.error('Erro ao carregar a tabela:', error));
}

// function consultarValores(){
    
// }


// function consultarValores() {
//     document.write("<h1>Sair com o velho - entrar com o novo!</h1>");
//     <div>
//         <h3>TABELA DE VALORES PARA CONSULTA</h3>
//         <table>
//           <colgroup span="4"></colgroup>
//           <tr>
//             <td>IMC</td>
//             <td>CLASSIFICAÇÃO</td>
//             <td>OBESIDADE (GRAU)</td>
//           </tr>
//           <tr>
//             <td>MENOR QUE 18,5</td>
//             <td>MAGREZA</td>
//             <td>0</td>
//           </tr>
//           <tr>
//             <td>ENTRE 18,5 E 24,9</td>
//             <td>NORMAL</td>
//             <td>0</td>
//           </tr>
//           <tr>
//             <td>ENTRE 25,0 E 29,9</td>
//             <td>SOBREPESO</td>
//             <td>I</td>
//           </tr>
//           <tr>
//             <td>ENTRE 30,0 E 39,9</td>
//             <td>OBESIDADE</td>
//             <td>II</td>
//           </tr>
//           <tr>
//             <td>MAIOR QUE 40,0</td>
//             <td>OBESIDADE GRAVE</td>
//             <td>III</td>
//           </tr>
//         </table>
//     </div>
//   }
