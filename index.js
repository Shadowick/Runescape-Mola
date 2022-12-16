fetch("js/listaItems.json")
    .then((resp) => resp.json())
    .then(function (data) {
        localStorage.setItem("itemsRunescape", JSON.stringify(data));
    });
let registroActual = 0;
let misRegistros = localStorage.getItem("misRegistros") ? JSON.parse(localStorage.getItem("misRegistros")) : [];

function CrearRegistro() {
    misRegistros.push([misRegistros[misRegistros.length - 1] ? misRegistros[misRegistros.length - 1][0] + 1 : 1, "", 0, undefined, []]);
    registroActual = misRegistros.length - 1;
    localStorage.setItem("registroActual", JSON.stringify(registroActual));
    localStorage.setItem("misRegistros", JSON.stringify(misRegistros));
    window.location.assign("pages/crear.html");
}

function borrarTodo() {
    swal.fire({
        title: '¿Está seguro?',
        text: "No podrá deshacer esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar todo',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Borrado',
                'Se eliminaron todos los datos',
                'success'
            )
            window.localStorage.removeItem("misRegistros");
            misRegistros = [];
        }
    })
}


let verMisRegistros = () => {
    misRegistros[0] ? window.location.assign("pages/misregistros.html") :
    Swal.fire(
        'Lo sentimos',
        'No hay registros creados',
        'error'
    )
}

document.getElementById("btnCrearRegistro").onclick = CrearRegistro;
document.getElementById("verMisRegistros").onclick = verMisRegistros;
document.getElementById("borrarTodo").onclick = borrarTodo;

document.getElementById("info").onclick = () => {
    location.assign("pages/info.html");
}


