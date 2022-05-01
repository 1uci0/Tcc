function cal() {
    // Parâmetros iniciais
    var m = Number(window.document.getElementById('M').value);
    var phi = Number(window.document.getElementById('phi').value);
    var phi_rad = phi*(Math.PI/180);
    var sd = document.querySelector('input[name="sistema_de_dente"]:checked').value;
    var k = Number(document.querySelector('input[name="altura_do_dente"]:checked').value);

    // Razão de redução
    var i = Number(window.document.getElementById('i').value);

    // Engrenagem 1
    var z1 = Number(window.document.getElementById('z1').value);
    var dp1 = Number(window.document.getElementById('dp1').value);
    
    // Engrenagem 2
    var z2 = Number(window.document.getElementById('z2').value);
    var dp2 = Number(window.document.getElementById('dp2').value);

    if (i == '') {

        if (((z1 == '' && dp1 == '') && (z2 == '' && dp2 == '')) || (z1 != '' && (z2 == '' && dp2 == '')) || (dp1 != '' && (z2 == '' && dp2 == '')) || (z2 != '' && (z1 == '' && dp1 == '')) || (dp2 != '' && (z1 == '' && dp1 == '')) || (((z1 != '' && dp1 != '' && m != dp1/z1) || (z2 != '' && dp2 != '' && m != dp2/z2)) )) {
            msgDeError();
        };

        if ((z1 != '' && z2 != '') && (dp1 == '' && dp2 == '')) {
            var dp1 = m*z1;
            var dp2 = m*z2;
            var i = z2/z1;
        
            window.document.getElementById('dp1').value = dp1;
            window.document.getElementById('dp2').value = dp2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 == '' && z2 == '') && (dp1 != '' && dp2 != '')) {
            var z1 = dp1/m;
            var z2 = dp2/m;
            var i = z2/z1;
        
            window.document.getElementById('z1').value = z1;
            window.document.getElementById('z2').value = z2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 != '' && dp2 != '') && (z2 == '' && dp1 == '')) {
            var dp1 = m*z1;
            var z2 = dp2/m;
            var i = z2/z1;
        
            window.document.getElementById('dp1').value = dp1;
            window.document.getElementById('z2').value = z2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 == '' && dp2 == '') && (z2 != '' && dp1 != '')) {
            var z1 = dp1/m;
            var dp2 = m*z2;
            var i = z2/z1;
        
            window.document.getElementById('z1').value = z1;
            window.document.getElementById('dp2').value = dp2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 != '' && dp1 != '' && m == dp1/z1) && (z2 != '' && dp2 == '')) {
            var dp2 = m*z2;
            var i = z2/z1;

            window.document.getElementById('dp2').value = dp2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 != '' && dp1 != '' && m == dp1/z1) && (z2 == '' && dp2 != '')) {
            var z2 = dp2/m;
            var i = z2/z1;
            
            window.document.getElementById('z2').value = z2;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 != '' && dp1 == '' ) && (z2 != '' && dp2 != '' && m == dp2/z2)) {
            var dp1 = m*z1;
            var i = z2/z1;

            window.document.getElementById('dp1').value = dp1;
            window.document.getElementById('i').value = i;
        }

        else if ((z1 == '' && dp1 != '' && m == dp1/z1) && (z2 != '' && dp2 != '' && m == dp2/z2)) {
            var z1 = dp1/m;
            var i = z2/z1;

            window.document.getElementById('z1').value = z1;
            window.document.getElementById('i').value = i;
        };

    }

    else {
        if (((z1 == '' && dp1 == '') && (z2 == '' && dp2 == '') && (i != '') || ((z1 != '' && dp1 == '') && (z2 != '' && dp2 == '') && (z2 != i*z1)) || ((z1 == '' && dp1 != '') && (z2 == '' && dp2 != '') && (dp2 != i*dp1)) || ((z1 != '' && dp1 == '') && (z2 == '' && dp2 != '') && (dp2 != i*m*z1)) || ((z1 == '' && dp1 != '') && (z2 != '' && dp2 == '') && (dp1 != (m/i)*z2)) || ((z1 != '' && dp1 != '') && (z2 == '' && dp2 == '') && (dp1 != m*z1)) || ((z1 == '' && dp1 == '') && (z2 != '' && dp2 != '') && (dp2 != m*z2)) || ((z1 != '' && dp1 != '') && (z2 != '' && dp2 == '') && ((dp1 != m*z1) || (z2 != i*z1)) || ((z1 != '' && dp1 != '') && (z2 == '' && dp2 != '') && ((dp1 != m*z1) || (dp2 != i*m*z1)) || ((z1 != '' && dp1 == '') && (z2 != '' && dp2 != '') && ((dp2 != m*z2) || (z1 != z2/i))) || ((z1 == '' && dp1 != '') && (z2 != '' && dp2 != '') && ((dp2 != m*z2) || (dp1 != dp2/i))) || ((z1 != '' && dp1 != '') && (z2 != '' && dp2 != '') && ((dp1 != m*z1) || (dp2 != m*z2) || z2 != i*z1 || dp2 != i*dp1)))))) {
            msgDeError();
        };

        if ((z1 != '' && dp1 == '') && (z2 == '' && dp2 == '')) {
            var dp1 = m*z1;
            var z2 = i*z1;
            var dp2 = m*z2;

            window.document.getElementById('dp1').value = dp1;
            window.document.getElementById('z2').value = z2;
            window.document.getElementById('dp2').value = dp2;
        }

        else if ((z1 == '' && dp1 != '') && (z2 == '' && dp2 == '')) {
            var z1 = dp1/m;
            var z2 = i*z1;
            var dp2 = m*z2;

            window.document.getElementById('z1').value = z1;
            window.document.getElementById('z2').value = z2;
            window.document.getElementById('dp2').value = dp2;
        }

        else if ((z1 == '' && dp1 == '') && (z2 != '' && dp2 == '')) {
            var dp2 = m*z2;
            var z1 = z2/i;
            var dp1 = m*z1;

            window.document.getElementById('dp2').value = dp2;
            window.document.getElementById('z1').value = z1;
            window.document.getElementById('dp1').value = dp1;
        }

        else if ((z1 == '' && dp1 == '') && (z2 == '' && dp2 != '')) {
            var z2 = dp2/m;
            var z1 = z2/i;
            var dp1 = m*z1;

            window.document.getElementById('z2').value = z2;
            window.document.getElementById('z1').value = z1;
            window.document.getElementById('dp1').value = dp1;
        }

        else if ((z1 != '' && dp1 != '') && (z2 == '' && dp2 == '') && (dp1 == m*z1)) {
            var z2 = i*z1;
            var dp2 = i*dp1;

            window.document.getElementById('z2').value = z2;
            window.document.getElementById('dp2').value = dp2;
        }

        else if ((z1 == '' && dp1 == '') && (z2 != '' && dp2 != '') && (dp2 == m*z2)) {
            var z1 = z2/i;
            var dp1 = dp2/i;

            window.document.getElementById('z1').value = z1;
            window.document.getElementById('dp1').value = dp1;
        };

    };

    if ((z1 != '' && dp1 != '') && (z2 != '' && dp2 != '') && (dp1 == m*z1 && dp2 == m*z2) && (z2 == i*z1 && dp2 == i*dp1)) {

        // pinhão e coroa
        var pc1 = Math.PI*m;
        var t1 = pc1/2;

        var pc2 = Math.PI*m;
        var t2 = pc2/2;

        if ((phi == 20 || phi == 22.5 || phi == 25) && sd == 'pc') {
            var a1 = m;
            var b1 = 1.25*m;

            var a2 = m;
            var b2 = 1.25*m;
        }

        else if (phi == 20  && sd == 'curta') {
            var a1 = 0.8*m;
            var b1 = m;

            var a2 = m;
            var b2 = 1.25*m;
        }

        else if ((phi == 22.5 ||phi == 25)  && sd == 'curta') {
            window.document.getElementById('a1').value = '';
            window.document.getElementById('b1').value = '';
            window.document.getElementById('ht1').value = '';

            window.document.getElementById('a2').value = '';
            window.document.getElementById('b2').value = '';
            window.document.getElementById('ht2').value = '';
        }

        var ht1 = a1 + b1;
        var rb1 = 0.5*dp1*Math.cos(phi_rad);
        var pb1 = pc1*Math.cos(phi_rad);

        var ht2 = a2 + b2;
        var rb2 = 0.5*dp2*Math.cos(phi_rad);
        var pb2 = pc2*Math.cos(phi_rad);

        // pinhão
        window.document.getElementById('pc1').value = pc1.toFixed(2);
        window.document.getElementById('t1').value = t1.toFixed(2);
        window.document.getElementById('a1').value = a1.toFixed(2);
        window.document.getElementById('b1').value = b1.toFixed(2);
        window.document.getElementById('ht1').value = ht1.toFixed(2);
        window.document.getElementById('rb1').value = rb1.toFixed(2);
        window.document.getElementById('pb1').value = pb1.toFixed(2);

        // coroa
        window.document.getElementById('pc2').value = pc2.toFixed(2);
        window.document.getElementById('t2').value = t2.toFixed(2);
        window.document.getElementById('a2').value = a2.toFixed(2);
        window.document.getElementById('b2').value = b2.toFixed(2);
        window.document.getElementById('ht2').value = ht2.toFixed(2);
        window.document.getElementById('rb2').value = rb2.toFixed(2);
        window.document.getElementById('pb2').value = pb2.toFixed(2);

        // distância entre eixos de centro
        var D = 0.5*(dp1 + dp2);
        window.document.getElementById('D').value = D.toFixed(2);

        // Interferência no pinhão - número mínimo de dentes que o pinhão deve possuir para que não haja interferência
        var z_min_p = (2*k/((1 + 2*i)*(Math.sin(phi_rad)*Math.sin(phi_rad))))*(i + Math.sqrt(i*i + (1 + 2*i)*(Math.sin(phi_rad)*Math.sin(phi_rad))));
        var z_max_c = (z1*z1*Math.sin(phi_rad)*Math.sin(phi_rad) - 4*k*k)/(4*k - 2*z1*Math.sin(phi_rad)*Math.sin(phi_rad));

        window.document.getElementById('z_min_p').value = Math.ceil(z_min_p);
        window.document.getElementById('z_max_c').value = Math.floor(z_max_c);
    };
        
}

function msgDeError() {
    // Razão de redução
    var i = Number(window.document.getElementById('i').value);

    window.document.getElementById('z1').value = '';
    window.document.getElementById('dp1').value = '';
    window.document.getElementById('pc1').value = '';
    window.document.getElementById('t1').value = '';
    window.document.getElementById('a1').value = '';
    window.document.getElementById('b1').value = '';
    window.document.getElementById('ht1').value = '';
    window.document.getElementById('rb1').value = '';
    window.document.getElementById('pb1').value = '';

    window.document.getElementById('z2').value = '';
    window.document.getElementById('dp2').value = '';
    window.document.getElementById('pc2').value = '';
    window.document.getElementById('t2').value = '';
    window.document.getElementById('a2').value = '';
    window.document.getElementById('b2').value = '';
    window.document.getElementById('ht2').value = '';
    window.document.getElementById('rb2').value = '';
    window.document.getElementById('pb2').value = '';

    window.document.getElementById('i').value = '';
    window.document.getElementById('D').value = '';

    if (i == '') {
        window.alert('Você deve digitar o campo do número de dentes ou do diâmetro');
    }
    else {
        window.alert('Você deve digitar o campo da razão de redução e do número de dente ou do diâmetro');
    }
}