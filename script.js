function insert(x) {
    var y = document.getElementById('equation').value;
    document.getElementById('equation').value = y + x;
}
function clean() {
    document.getElementById('equation').value = "";
}

function calculate() {
    var expr = document.getElementById('equation').value

    if (expr == "") {
        alert("Introduza valores");
    }else if(expr.includes("~")){
        denial(expr)
    }
}

// Esta função recebe o valor completo da expressão e corta o que está em frente da negação "afterDenial"
// Depois verifica se o valor é v ou f se não é uma expressão
function denial(expr) {
    afterDenial =expr.split('~').pop()
    if(afterDenial=="V"||afterDenial=="F"){
        //caso seja ~V ou ~F
        if(afterDenial=="V"){
            alert("F")
        }else{
            alert("V")
        }
    }else{
        //caso seja ~(V<->F)
        alert("Expressão")
    }
}

//Provabelmente vamos mudar de abordagem qnd tivermos as prioridades a funcionar