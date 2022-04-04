// Calcular os parâmetros iniciais

function calcular() {
    var m = window.document.getElementById('Mn').value;
    var z = window.document.getElementById('Z').value;
    var d = window.document.getElementById('dp');

    var d = m*z;

    diametro.innerHTML = "d =  " +d + " mm"
}