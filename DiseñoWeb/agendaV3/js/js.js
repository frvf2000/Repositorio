function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email = document.getElementById("email").value;
    var dire = document.getElementById("direcc").value;
    var casa = document.getElementById("casa").value;
    //-----------------------//
    var datos = {
        'numCasa': casa,
        'numTelefono': movil,
        'correo': email,
        'direccion': dire
    };
    //-----------------------//
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    document.getElementById("email").value = "";
    document.getElementById("casa").value = "";
    document.getElementById("direcc").value = "";

    actualizarDatos();
}
//Recuperar con One click
function recuperarDatos() {
    var claveN = prompt("Ingresa el Nombre a RECUPERAR", "");
    //var nombre = document.getElementById("nombre").value;
    //localStorage.getItem(nombre);
   
    var datsoss = JSON.parse(localStorage.getItem(claveN));
    document.getElementById("nombre").value =claveN;
    document.getElementById("movil").value = datsoss.numTelefono;
    document.getElementById("casa").value = datsoss.numCasa;
    document.getElementById("email").value = datsoss.correo;
    document.getElementById("direcc").value = datsoss.direccion;
} 
//REcuperar Datos con JQuery
/**
 * $("#Recuperar").click(function () {
    var claveN = prompt("Ingresa el Nombre a RECUPERAR", "");
    //var nombre = document.getElementById("nombre").value;
    localStorage.getItem(claveN);
    var datsoss = JSON.parse(localStorage.getItem(claveN));
    document.getElementById("movil").value = localStorage.getItem(nombre);
    
    document.getElementById("movil").value = datsoss.correo;
    document.getElementById("casa").value = datsoss.numCasa;
    document.getElementById("email").value = datsoss.correo;
    document.getElementById("direcc").value = datsoss.direccion;
});
 */
//funcionJquery
//Funcion Eliminar con Jquery

$("#Eliminar").click(function () {
    var claveN = prompt("Ingresa el Nombre a ELIMINAR", "");
    //var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(claveN);
    actualizarDatos();
});

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}
function actualizarDatos() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacio</li>';
    } else {
        for (var index = 0; index < localStorage.length; index++) {
            var key = localStorage.key(index);
            var datsoss = JSON.parse(localStorage.getItem(key));
            registro += ' <div class="conteinerTablaMostrar">'
                + '<div class="nom">' + key + '</div>'
                + '<div class ="nom">' + datsoss.numTelefono + '</div>'
                + '<div class ="nom">' + datsoss.numCasa + '</div>'
                + '<div class ="nom">' + datsoss.correo + '</div>'
                + '<div class ="nom">' + datsoss.direccion + '</div>'
                + '</div><br>';
        }
    }
    document.getElementById('datos').innerHTML = registro;
}
