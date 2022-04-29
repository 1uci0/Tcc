function cal() {

    var m = Number(window.document.getElementById('M').value);
    var phi = Number(window.document.getElementById('phi').value);
    var phi_rad = phi*(Math.PI/180);
    var sd = document.querySelector('input[name="sistema_de_dente"]:checked').value;
    
    // Engrenagem 1
    var z1 = Number(window.document.getElementById('z1').value);
    var dp1 = Number(window.document.getElementById('dp1').value);
    
    // Engrenagem 2
    var z2 = Number(window.document.getElementById('z2').value);
    var dp2 = Number(window.document.getElementById('dp2').value);

    if ((z1 == '' && dp1 == '') || (z1 != '' && dp1 != '' && m != (dp1/z1))) {
        window.document.getElementById('z1').value = '';
        window.document.getElementById('dp1').value = '';
        window.document.getElementById('pc1').value = '';
        window.document.getElementById('t1').value = '';
        window.document.getElementById('a1').value = '';
        window.document.getElementById('b1').value = '';
        window.document.getElementById('ht1').value = '';
        window.document.getElementById('rb1').value = '';
        window.document.getElementById('pb1').value = '';
        window.alert('Você deve digitar o campo do número de dentes ou do número de dentes e escolher o sistema de dentes');
    }

    else if (dp1 == '' && z1 != '') {
        var dp1 = m*z1;
        window.document.getElementById('dp1').value = dp1.toFixed(3);
    }

    else if (dp1 != '' && z1 == '') {
        var z1 = dp1/m;
        window.document.getElementById('z1').value = z1;
    }

    if (z1 != 0 && dp1 != 0 && m == (dp1/z1)) {

        // Se conseguir importa a função, a outra função é a partir desta linha
        var pc1 = Math.PI*m;
        window.document.getElementById('pc1').value = pc1.toFixed(3);

        var t1 = pc1/2;
        window.document.getElementById('t1').value = t1.toFixed(3);

        if ((phi == 20 || phi == 22.5 || phi == 25) && sd == 'pc') {
            var a1 = m;
            var b1 = 1.25*m;
            window.document.getElementById('a1').value = a1.toFixed(3);
            window.document.getElementById('b1').value = b1.toFixed(3);
        }

        else if (phi == 20  && sd == 'curta') {
            var a1 = 0.8*m;
            var b1 = m;
            window.document.getElementById('a1').value = a1.toFixed(3);
            window.document.getElementById('b1').value = b1.toFixed(3);
        }

        else if ((phi == 22.5 ||phi == 25)  && sd == 'curta') {
            window.document.getElementById('a1').value = '';
            window.document.getElementById('b1').value = '';
        }

        var ht1 = a1 + b1;
        window.document.getElementById('ht1').value = ht1.toFixed(3);

        var rb1 = 0.5*dp1*Math.cos(phi_rad);
        window.document.getElementById('rb1').value = rb1.toFixed(3);

        var pb1 = pc1*Math.cos(phi_rad);
        window.document.getElementById('pb1').value = pb1.toFixed(3);

    }
}