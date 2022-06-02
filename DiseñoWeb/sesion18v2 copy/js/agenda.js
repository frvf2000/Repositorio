function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    var email  = document.getElementById("email").value;
    //-----------------------//
    var datos={
        'movil': movil,
        'email':email,
        'direccion':direccion
    };
    //-----------------------//
    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("movil").value = "";
    
    actualizarDatos();
}
function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value = localStorage.getItem(nombre);
}
function eliminarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
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
            var datsoss=JSON.parse(localStorage.getItem(key));
            registro += '<li>' + '<span class="nom">' + key + '</span>' 
            + '<span class ="nom">' + datsoss.email+ '</span>' + '<span class ="nom">' + datsoss.movil+ '</span>' + '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}