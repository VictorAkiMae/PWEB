function mOnclick(obj) {
    var img = document.createElement("img");
    img.src = "janelaquebrada.png";
    document.getElementById("test").appendChild(img);
    obj.innerHTML = "Janela quebrada"
}

function mDown(obj) {
    obj.style.color = "#00FFFF";
    obj.innerHTML = "Solte o clique";
}

function mUp(obj) {
    obj.style.color = "#ffff00";
    obj.innerHTML = "Obrigado";
}

function mMove(obj) {
    obj.style.color = "#FF0000";
    obj.innerHTML = "Moveu para cima do Objeto";
        }

function mMover(obj) {
    obj.style.color = "#cc0000";
    obj.innerHTML = "Passou com o mouse em cima do Objeto";
    //alert("AAA");

}

function mOut(obj) {
    obj.style.color = "#AA3000";
    obj.innerHTML = "Saiu da Borda do Objeto";
}