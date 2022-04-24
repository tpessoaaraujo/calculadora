function insert(num) {
    let nextnum = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = nextnum + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = '';
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = '0';
    }
}