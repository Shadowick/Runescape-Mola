const DateTime = luxon.DateTime;
const botonesItems = document.getElementById("botonesItems");
const panelItems = document.getElementById("panelItems");
const btnEliminarItem = document.getElementById("btnEliminarItem");
const seccionAgregarItem = document.getElementById("agregarItem");
const seccionModificarItem = document.getElementById("modificarItem");
const pieTablaItems = document.getElementById("pieTablaItems");
const dropDownItems = document.getElementById("dropDownItems");
const listaItemsRunescape = JSON.parse(localStorage.getItem("itemsRunescape"));
let misRegistros = JSON.parse(localStorage.getItem("misRegistros"));
let registroActual = JSON.parse(localStorage.getItem("registroActual"));
let miRegistro = misRegistros[registroActual];
let visAgregarItem = false;
let botonesModificarItem, checksEliminarItems;

document.getElementById("btnAgregarItem").onclick = agregarItem;
document.getElementById("guardarSalir").onclick = guardarSalir;
document.getElementById("btnCancelarCrear").onclick = cancelarCrear;
document.getElementById("btnListo").onclick = listoItems;
document.getElementById("btnCargarItem").onclick = cargarItem;

if (miRegistro[1]) {
    recargar();
}

function agregarItem() {
    botonesItems.style.display = "none";
    pieTablaItems.style.display = "table-footer-group";
    seccionAgregarItem.style.display = "flex";
    visAgregarItem = true;
    const inputsAgregar = document.getElementsByClassName("inputAgregar");
    for (input of inputsAgregar) {
        input.addEventListener("keypress", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                document.getElementById("btnCargarItem").click();
            }
        })
    }
    selectorItemsAgregar();
}

function selectorItemsAgregar() {
    let opcionesDropDown = "";
    for (let key of Object.keys(listaItemsRunescape)) {
        opcionesDropDown += `<option name="itemsRunescape" value="${key}">${listaItemsRunescape[key]["nombre"]}</option>`;
    }
    dropDownItems.innerHTML = `<option value="" selected disabled hidden>Seleccione</option>${opcionesDropDown}`;
}

function cargarItem() {
    const itemElegido = dropDownItems.options[dropDownItems.selectedIndex].value;
    const cantidad = document.getElementById("cantidadItem").value;
    if (!itemElegido && cantidad) {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Seleccione un item', 'warning')
    } else if (itemElegido && !cantidad) {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Escriba una cantidad', 'warning')
    } else if (!itemElegido && !cantidad) {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Seleccione un item y especifique la cantidad', 'warning')
    } else {
        const fechaCarga = document.getElementById("fechaCarga").value;
        const itemNuevo = [itemElegido, cantidad, fechaCarga];
        miRegistro[4].push(itemNuevo);
        recargar(true);
    }
}
function listoItems() {
    botonesItems.style.display = "block";
    seccionAgregarItem.style.display = "none";
    visAgregarItem = false;
    pieTablaItems.style.display = "none";
}

function guardarSalir() {
    nombreRegistro = document.getElementById("nombreRegistro").value;
    montoInicial = document.getElementById("montoInicial").value;
    if (nombreRegistro && montoInicial) {
        miRegistro[1] = nombreRegistro;
        miRegistro[2] = montoInicial;
        miRegistro[3] = parseInt(montoInicial);
        for (let i = 0; i < miRegistro[4].length; i++) {
            miRegistro[3] -= ((listaItemsRunescape[miRegistro[4][i][0]]["valor"]) * (miRegistro[4][i][1]));
        }
        
        /* miRegistro[3] Es el monto inicial ingresado, (listaItemsRunescape[miRegistro[4][i][0]]["valor"]) es el valor del item seleccionado, y (miRegistro[4][i][1]) es la cantidad de items que voy a "debitar" de la cuenta */

        miRegistro[3] = parseInt(miRegistro[3]);
        localStorage.setItem("misRegistros", JSON.stringify(misRegistros));
        Swal.fire({
            showConfirmButton: false,
            title: 'Guardado',
            text: 'Los cambios fueron guardados',
            icon: 'success'
        }
        );
        setTimeout(() => {
            location.assign("misregistros.html");
        }, 1500)

    } else if (!nombreRegistro && montoInicial) {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Introduzca un nombre para el registro', 'warning')
    } else if (nombreRegistro && !montoInicial) {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Introduzca el monto del registro', 'warning')
    } else {
        Swal.fire('NO SE HA PODIDO REALIZAR LA ACCIÓN', 'Introduzca un nombre y un monto para realizar el registro', 'warning')
    }
}

function cancelarCrear() {
    if (!(document.getElementById("nombreRegistro").value == miRegistro[1] && document.getElementById("montoInicial").value == miRegistro[2] && JSON.stringify(miRegistro[4]) == JSON.stringify(JSON.parse(localStorage.getItem("misRegistros"))[registroActual][4]))) {
        swal.fire({
            title: '¿Desea guardar los cambios?',
            icon: 'question',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No guardar`,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                guardarSalir();
            } else if (result.isDenied) {
                Swal.fire({
                    showConfirmButton: false,
                    title: 'No guardado',
                    text: 'Los cambios no fueron guardados',
                    icon: 'warning'
                }
                )
                setTimeout(() => { salirSinGuardar() }, 1500);
            }
        })
    } else {
        if (!miRegistro[1]) {
            misRegistros.pop();
            localStorage.setItem("misRegistros", JSON.stringify(misRegistros));
        }
        location.assign("../index.html");
    }
}
function salirSinGuardar() {
    if (!miRegistro[1]) {
        misRegistros.pop();
        localStorage.setItem("misRegistros", JSON.stringify(misRegistros));
    }
    location.assign("../index.html");
}

function modificarItem(id) {
    panelItems.style.display = "none";
    seccionModificarItem.style.display = "flex";
    let itemElegido = miRegistro[4][id][0];
    let dropDownModificarItems = document.getElementById("dropDownModificarItems");
    let opcionesDropDown = "";
    for (let key of Object.keys(listaItemsRunescape)) {
        opcionesDropDown += `<option name="itemsRunescape" value="${key}" ${key == itemElegido ? "selected" : ""}>${listaItemsRunescape[key]["nombre"]}</option>`;
    }
    dropDownModificarItems.innerHTML = `${opcionesDropDown}`;
    let cantidad = miRegistro[4][id][1];
    let fechaCarga = miRegistro[4][id][2];
    document.getElementById("cantidadItemModificar").value = cantidad;
    document.getElementById("fechaCargaModificar").value = fechaCarga;
    document.getElementById("btnModificarItem").onclick = () => guardarModificarItem(id);
    document.getElementById("btnCancelarModificacion").onclick = () => {
        if (visAgregarItem) {
            seccionAgregarItem.style.display = "flex";
        }
        panelItems.style.display = "flex";
        seccionModificarItem.style.display = "none";
    }
}

function guardarModificarItem(itemElegido) {
    let dropDownModificarItems = document.getElementById("dropDownModificarItems");
    let id = dropDownModificarItems.options[dropDownModificarItems.selectedIndex].value;
    let cantidad = document.getElementById("cantidadItemModificar").value;
    let fechaCarga = document.getElementById("fechaCargaModificar").value;
    miRegistro[4][itemElegido][0] = id;
    miRegistro[4][itemElegido][1] = cantidad;
    miRegistro[4][itemElegido][2] = fechaCarga;
    misRegistros[registroActual] = miRegistro;
    if (visAgregarItem) {
        seccionAgregarItem.style.display = "flex";
    }
    panelItems.style.display = "flex";
    seccionModificarItem.style.display = "none";
    recargar(true);
}

function recargar(a) {
    if (!a) {
        misRegistros = JSON.parse(localStorage.getItem("misRegistros"));
        miRegistro = misRegistros[registroActual];
        document.getElementById("nombreRegistro").value = miRegistro[1];
        document.getElementById("montoInicial").value = miRegistro[2];
    }
    if (miRegistro[4][0]) {
        let tablaItems = document.getElementById("tablaItems");
        let listaTablaItems = "";
        for (let i = 0; i < miRegistro[4].length; i++) {
            let posicion = miRegistro[4][i];
            listaTablaItems += `<tr><td>${i + 1}</td><td>${listaItemsRunescape[posicion[0]]["nombre"]}</td><td>${posicion[1]}</td><td>${posicion[2] ? DateTime.fromISO((posicion[2])).toLocaleString() : "ND"}</td><td><button class="botonesModificarItem"><img class="iconoEditar" src="../icons/editar.png" alt="Editar"></button></td><td><input type="checkbox" class="checksEliminarItems"></td></tr>`
        }
        tablaItems.innerHTML = listaTablaItems;
        botonesModificarItem = document.getElementsByClassName("botonesModificarItem");
        checksEliminarItems = document.getElementsByClassName("checksEliminarItems");
        for (let i = 0; i < botonesModificarItem.length; i++) {
            botonesModificarItem[i].onclick = () => modificarItem(i);
        }
    } else {
        tablaItems.innerHTML = "";
    }
}

btnEliminarItem.onclick = () => {
    let noEliminar = [];
    for (let i = 0; i < checksEliminarItems.length; i++) {
        if (!checksEliminarItems[i].checked) {
            noEliminar.push(i);
        }
    }
    if (noEliminar.length == miRegistro[4].length) {
        Swal.fire(
            'Mmm...',
            'No hay items seleccionados',
            'error'
        )
    } else {
        swal.fire({
            title: '¿Está seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado',
                    'La selección ha sido eliminada',
                    'success'
                )
                eliminarItems(noEliminar);
            }
        })
    }
}
function eliminarItems(noEliminar) {
    let nuevosItems = [];
    for (let i = 0; i < miRegistro[4].length; i++) {
        if (noEliminar.includes(i)) {
            nuevosItems.push(miRegistro[4][i]);
        }
    }
    miRegistro[4] = nuevosItems;
    recargar(true);
}