const usuarios = [{
    username: 'molasico7',
    contraseña: '123456789'
},
{
    username: 'shadowick07',
    contraseña: '987654321'
}]

const items = [{
    nombre: "Saradomin boots",
    defensa: "Mágica",
    precio: 15000,
    img: './img/Saradomin boots.png'
}, {
    nombre: "Saradomin Cape",
    defensa: "Mágica",
    precio: 30000,
    img: './img/Saradomin Cape.png'
}, {
    nombre: "Saradomin cuirass",
    defensa: "Mágica",
    precio: 400000,
    img: './img/Saradomin cuirass.png'
}, {
    nombre: "Saradomin gaunlets",
    defensa: "Mágica",
    precio: 25000,
    img: './img/Saradomin gaunlets.png'
}, {
    nombre: "Saradomin greaves",
    defensa: "Mágica",
    precio: 10000,
    img: './img/Saradomin greaves.webp'
}, {
    nombre: "Saradomin helm",
    defensa: "Mágica",
    precio: 50000,
    img: './img/Saradomin helm.png'
}, {
    nombre: "Dharok's helm",
    defensa: "Mágica",
    precio: 150000,
    img: "./img/Dharok's helm.png"
}, {
    nombre: "Dharok's greataxe",
    defensa: "Física",
    precio: 300000,
    img: "./img/Dharok's greataxe.webp"
}, {
    nombre: "Dharok's platebody",
    defensa: "Física",
    precio: 500000,
    img: "./img/Dharok's platebody.webp"
}, {
    nombre: "Dharok's platelegs",
    defensa: "Física",
    precio: 250000,
    img: "./img/Dharok's platelegs.webp"
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
    console.log(encontrado)
    console.log(typeof encontrado)

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
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom imgItems" id="fotoItem">
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
