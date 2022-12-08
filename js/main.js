const usuarios = [{
    username: 'molasico7',
    contraseña: '123456789'
},
{
    username: 'shadowick07',
    contraseña: '987654321'
}]

const inputUsernameLogin = document.getElementById('usernameLogin'),
    inputPassLogin = document.getElementById('passwordLogin'),
    checkRecordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    elementosToggleables = document.querySelectorAll('.toggeable');


function validarUsuario(usersDB, user, contraseña) {
    let encontrado = usersDB.find((userDB) => userDB.username == user);
/*     console.log(encontrado)
    console.log(typeof encontrado) */

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.contraseña != contraseña) {
            return false;
        } else {
            return encontrado;
        }
    }
}

function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'user': usuarioDB.username,
        'pass': usuarioDB.contraseña
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    return JSON.parse(storage.getItem('usuario'));
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.user}</span>`
}

function mostrarInfoItems(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card" id="tarjeta${element.nombre}">
                <h4 class="card-header" id="nombreItem">Nombre: ${element.nombre}</h4>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom d-block mx-auto imgItems" id="fotoItem">
                <div class="card-body">
                    <p class="card-text" id="defensa">Defensa: ${element.defensa}</p>
                    <p class="card-text" id="precio">Precio: ${element.precio} monedas de oro</p>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoItems(items);
        presentarInfo(elementosToggleables, 'd-none');
    }
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    if (!inputUsernameLogin.value || !inputPassLogin.value) {
        alert('Todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, inputUsernameLogin.value, inputPassLogin.value);

        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {

            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            modal.hide();
            mostrarInfoItems(items);
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));
