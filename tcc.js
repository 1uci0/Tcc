// Calcular os parâmetros iniciais

function calcular() {
    var m = window.document.getElementById('Mn');
    var z = window.document.getElementById('Z');
    var d = window.document.getElementById('dp');

    var m = Number(m.value);
    var z = Number(z.value);

    var d = m*z;

    diametro.innerHTML = "d =  " +d + " mm"
}