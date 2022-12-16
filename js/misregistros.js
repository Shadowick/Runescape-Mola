let misRegistros = JSON.parse(localStorage.getItem("misRegistros"));
let checksEliminar, botonesModificar;
let tablaRegistros = document.getElementById("tablaMisRegistros");
actualizarTabla();

function modificar(i){
    localStorage.setItem("registroActual",JSON.stringify(i));
    location.assign("crear.html");
}

document.getElementById("btnInicio").onclick = () => location.assign("../index.html");

document.getElementById("btnEliminarRegistro").onclick = () => {
    let noEliminar = [];
    for (let i = 0; i < checksEliminar.length; i++) {
        if (!checksEliminar[i].checked) {
            noEliminar.push(i);
        }
    }
    if (noEliminar.length == misRegistros.length) {
        Swal.fire(
            'Mmm...',
            'No hay registros seleccionados',
            'error'
        )
    } else {
        swal.fire({
            title: '¿Está seguro?',
            text: "No podrá deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado',
                text: 'La selección ha sido eliminada',
                icon: 'success'
            }).then(() => {
                if (!misRegistros[0]) {
                    location.assign("../index.html")
                }
            })
            eliminarRegistros(noEliminar);
            }
        })
    }
}

function eliminarRegistros(noEliminar) {
    let nuevosRegistros = [];
    for (let i = 0; i < misRegistros.length; i++) {
        if (noEliminar.includes(i)) {
            nuevosRegistros.push(misRegistros[i]);
        }
    }
    misRegistros = nuevosRegistros;
    localStorage.setItem("misRegistros",JSON.stringify(misRegistros));
    localStorage.removeItem("registroActual");
    actualizarTabla();
}

function actualizarTabla() {
    let listaIndividuos = "";
    for (let i = 0; i < misRegistros.length; i++) {
        listaIndividuos += `<tr><td>${misRegistros[i][0]}</td><td>${misRegistros[i][1]}</td><td>${misRegistros[i][2]}</td><td>${misRegistros[i][3]}</td><td><button class="botonesModificar"><img class="iconoEditar" src="../icons/editar.png" alt="Editar"></button></td><td><input type="checkbox" class="checksEliminarRegistros"></td></tr>`;
    }
    tablaRegistros.innerHTML = listaIndividuos;
    botonesModificar = document.getElementsByClassName("botonesModificar");
    for (let i = 0; i < botonesModificar.length; i++) {
        botonesModificar[i].onclick = () => modificar(i); 
    }
    checksEliminar = document.getElementsByClassName("checksEliminarRegistros");
}