var lista = ["lavar o carro", "mijar", "jogar"];
var capturado = "";
function capturar(){
    capturado = document.getElementById('valor').value;
    lista[lista.length] = capturado;
    document.getElementById("AQUI").innerHTML = lista;
}