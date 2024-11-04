var objResposta = new Retangulo(base,altura);

base = document.getElementsByClassName("base").value;
var altura = document.getElementsByClassName("altura").value;

alert("Valor da área: " + objResposta.calculaAreaRet);


function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

const retangulo = new Retangulo();

console.log("A área do retângulo é: " + retangulo.calcularArea());


function calcular() {

    var base = parseFloat(document.getElementsByName("base")[0].value);
    var altura = parseFloat(document.getElementsByName("altura")[0].value);

    var objResposta = new Retangulo(base, altura);

    alert("Valor da área: " + objResposta.calcularArea());
}

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}


// <-!--------------------------------->