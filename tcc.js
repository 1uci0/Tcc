
function confirmar() {
    var coluna1 = document.querySelector('input[name="coluna1"]:checked').value;
    var coluna2 = document.querySelector('input[name="coluna2"]:checked').value;
    var coluna3 = document.querySelector('input[name="coluna3"]:checked').value;
    var coluna4 = document.querySelector('input[name="coluna4"]:checked').value;

    if (coluna1 == 'dp1') {
        document.getElementById('dpp').readOnly = false;
    }
    else {
        document.getElementById('zp').readOnly = false;
    };

    if (coluna2 == 'red') {
        document.getElementById('i').readOnly = false;
    }
    else if (coluna2 == 'z2') {
        document.getElementById('zc').readOnly = false;
    }
    else {
        document.getElementById('dpc').readOnly = false;
    };

    if (coluna3 == 'pot') {
        document.getElementById('H').readOnly = false;
    }
    else if (coluna3 == 'T1') {
        document.getElementById('Tp').readOnly = false;
    }
    else {
        document.getElementById('Tc').readOnly = false;
    };

    if (coluna4 == 'n1') {
        document.getElementById('np').readOnly = false;
    }
    else {
        document.getElementById('nc').readOnly = false;
    };

    document.getElementById("confirmar").disabled = "disabled";
}

function cal() {
    // Parâmetros iniciais
    var m = Number(window.document.getElementById('M').value);
    var phi = Number(window.document.getElementById('phi').value);
    var phi_rad = phi*(Math.PI/180);
    var sd = document.querySelector('input[name="sistema_de_dente"]:checked').value;
    var k = Number(document.querySelector('input[name="altura_do_dente"]:checked').value);

    // Razão de redução
    var i = Number(window.document.getElementById('i').value);

    // Potência
    var H = Number(window.document.getElementById('H').value);

    // Engrenagem 1
    var z1 = Number(window.document.getElementById('zp').value);
    var dp1 = Number(window.document.getElementById('dpp').value);
    var np = Number(window.document.getElementById('np').value);
    var Tp = Number(window.document.getElementById('Tp').value);
    
    // Engrenagem 2
    var z2 = Number(window.document.getElementById('zc').value);
    var dp2 = Number(window.document.getElementById('dpc').value);
    var nc = Number(window.document.getElementById('nc').value);
    var Tc = Number(window.document.getElementById('Tc').value);

    // lista
    var lista = [z1,z2,dp1,dp2,Tp,Tc,np,nc,H,i];
    var cont = 0;

    // encontrar quantas variáveis foram preenchidas
    for (j = 0; j < lista.length; j++) {
        if (lista[j] > 0) {
            cont++;
        }
    }

    var varPreenchida = cont;
    
    if (varPreenchida < 4) {
        window.alert('Erro: Caro usuário, você deve preencher todos os parâmetros escolhidos.');
    }

    else {
        
        // Análise geométrica

        if (i == '') {

            if (z1 != '' && z2 != '') {
                var dp1 = m*z1;
                var dp2 = m*z2;
            }

            else if (z1 != '' && dp2 != '') {
                var dp1 = m*z1;
                var z2 = dp2/m;
            }

            else if (dp1 != '' && dp2 != '') {
                var z1 = dp1/m;
                var z2 = dp2/m;
            }

            else if (dp1 != '' && z2 != '') {
                var z1 = dp1/m;
                var dp2 = m*z2;
            }
        }

        else {

            if (z1 != '') {
                var dp1 = m*z1;
                var z2 = i*z1;
                var dp2 = m*z2;
            }
    
            else {
                var z1 = dp1/m;
                var z2 = i*z1;
                var dp2 = m*z2;
            }
        };

        var i = z2/z1;

        window.document.getElementById('dpp').value = dp1.toFixed(2);
        window.document.getElementById('dpc').value = dp2.toFixed(2);
    
        window.document.getElementById('zp').value = z1;
        window.document.getElementById('zc').value = z2;
    
        window.document.getElementById('i').value = i.toFixed(2);

        if ((z1 != '' && dp1 != '') && (z2 != '' && dp2 != '') && (dp1 == m*z1 && dp2 == m*z2) && (z2 == i*z1 && dp2 == i*dp1)) {
        
            // pinhão
            var pc1 = Math.PI*m;
            var t1 = pc1/2;
            var rb1 = 0.5*dp1*Math.cos(phi_rad);
            var pb1 = pc1*Math.cos(phi_rad);
    
            window.document.getElementById('pc1').value = pc1.toFixed(2);
            window.document.getElementById('t1').value = t1.toFixed(2);
            window.document.getElementById('rb1').value = rb1.toFixed(2);
            window.document.getElementById('pb1').value = pb1.toFixed(2);
    
            // coroa
            var pc2 = Math.PI*m;
            var t2 = pc2/2;
            var rb2 = 0.5*dp2*Math.cos(phi_rad);
            var pb2 = pc2*Math.cos(phi_rad);
    
            window.document.getElementById('pc2').value = pc2.toFixed(2);
            window.document.getElementById('t2').value = t2.toFixed(2);
            window.document.getElementById('rb2').value = rb2.toFixed(2);
            window.document.getElementById('pb2').value = pb2.toFixed(2);
    
            // distância entre eixos de centro
            var C = 0.5*(dp1 + dp2);
    
            window.document.getElementById('C').value = C.toFixed(2);
    
            // Interferência no pinhão - número mínimo de dentes que o pinhão deve possuir para que não haja interferência
            var z_min_p = (2*k/((1 + 2*i)*(Math.sin(phi_rad)*Math.sin(phi_rad))))*(i + Math.sqrt(i*i + (1 + 2*i)*(Math.sin(phi_rad)*Math.sin(phi_rad))));
            var z_max_c = (z1*z1*Math.sin(phi_rad)*Math.sin(phi_rad) - 4*k*k)/(4*k - 2*z1*Math.sin(phi_rad)*Math.sin(phi_rad));
    
            window.document.getElementById('z_min_p').value = Math.ceil(z_min_p);
            window.document.getElementById('z_max_c').value = Math.floor(z_max_c);
    
            if (sd == 'pc') {
                var a1 = m;
                var b1 = 1.25*m;
    
                var a2 = m;
                var b2 = 1.25*m;
            }
    
            if (sd == 'curta') {
                if (phi == 20) {
                    var a1 = 0.8*m;
                    var b1 = m;
    
                    var a2 = 0.8*m;
                    var b2 = m;
                }
                else if (phi == 22.5 || phi == 25) {
                    window.document.getElementById('a1').value = '';
                    window.document.getElementById('b1').value = '';
                    window.document.getElementById('ht1').value = '';
    
                    window.document.getElementById('a2').value = '';
                    window.document.getElementById('b2').value = '';
                    window.document.getElementById('ht2').value = '';
                }
            }
    
            var ht1 = a1 + b1;
            var ht2 = a2 + b2;
    
            if (sd == 'pc' || (sd == 'curta' && phi == 20)) {
                // pinhão
                window.document.getElementById('a1').value = a1.toFixed(2);
                window.document.getElementById('b1').value = b1.toFixed(2);
                window.document.getElementById('ht1').value = ht1.toFixed(2);
    
                // coroa
                window.document.getElementById('a2').value = a2.toFixed(2);
                window.document.getElementById('b2').value = b2.toFixed(2);
                window.document.getElementById('ht2').value = ht2.toFixed(2);
            } 
        }

        // Análise dinâmica

        if (H == '') {

            if (np != '' && Tp != '') {
                var nc = np/i;
                var Tc = i*Tp;
            }

            else if (np != '' && Tc != '') {
                var Tp = Tc/i;
                var nc = np/i;
            }

            else if (nc != '' && Tp != '') {
                var np = i*nc;
                var Tc = i*Tp;
            }

            else if (nc != '' && Tc != '') {
                var np = i*nc;
                var Tp = Tc/i;
            }
        }

        else {

            if (np != '') {
                var wt = 60e3/(Math.PI*dp1*np);
                var Tp = 0.5*dp1*wt;
    
                var nc = np/i;
                var Tc = i*Tp;
            }
    
            else {
                var wt = 60e3/(Math.PI*dp2*nc);
                var Tc = 0.5*dp2*wt;
    
                var np = i*nc;
                var Tp = Tc/i;
            }
        }

        var wt = 2*Tp/dp1;
        var H = (Math.PI*dp1*np*wt)/60e3;
    
        window.document.getElementById('np').value = np.toFixed(2);
        window.document.getElementById('Tp').value = Tp.toFixed(2);
    
        window.document.getElementById('nc').value = nc.toFixed(2);
        window.document.getElementById('Tc').value = Tc.toFixed(2);
    
        window.document.getElementById('wt').value = wt.toFixed(2);
        window.document.getElementById('H').value = H.toFixed(3);
    
        var w = wt/Math.cos(phi_rad);
        var wr = w*Math.sin(phi_rad);
    
        window.document.getElementById('w').value = w.toFixed(2);
        window.document.getElementById('wr').value = wr.toFixed(2);
    }
}