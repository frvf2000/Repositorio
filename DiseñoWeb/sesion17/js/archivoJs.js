function compara() {
    var a = 1;
    var a1 = 2;
    if (a == a1)
        alert("A y A1 son iguales");

    else
        alert("A y A1 NO son iguales");
}
function resta(x, y) {
    var resta = x - y;
    document.write("<h2>La resta es: " + resta + "</h2>");//Crear Etiqueta con programacion
}
function suma(x, y) {
    var suma = x + xy;
    document.getElementById("idP_sumar").innerHTML = "La suma es " + suma;
}
function escribir() {
    valor = document.getElementById('entrada').value;
    document.getElementById('conteiner').innerHTML = '' + valor;
}
function escribir2() {
    valor = document.getElementsByClassName("entrada").value;
    document.getElementsByClassName("conteiner").innerHTML = '' + valor;

}
function name(params) {
    let p = document.getElementsByClassName('experiment');

    for (let x = 0; x < p.length; x++) {
        p[x].style.color = 'dodgerblue';
    }
}