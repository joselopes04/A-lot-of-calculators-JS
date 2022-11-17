function insert(x){
    var y = document.getElementById('equation').value;
    document.getElementById('equation').value = y+x; 
}
function clean(){
    document.getElementById('equation').value = "";
}

function calculate(){
    expr = document.getElementById('equation').value

    if(expr==""){
        alert("Introduza valores");
    }
}