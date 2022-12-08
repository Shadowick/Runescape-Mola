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
    elementosToggleables = document.querySelectorAll('.toggeable');


function validarUsuario(usersDB, user, contraseña) {
    let encontrado = usersDB.find((userDB) => userDB.username == user);

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

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function estaLogueado(usuario) {

    if (usuario) {
        saludar(usuario);
        presentarInfo(elementosToggleables, 'd-none');
    }
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    if (!inputUsernameLogin.value || !inputPassLogin.value) {
        Swal.fire({
            title: 'Información faltante',
            text: 'Debe completar ambos campos antes de continuar.',
            icon: 'info',
            iconColor: '#0000FF',
            confirmButtonText: 'Salir',
            timer: 3000
        })
    } else {
        let data = validarUsuario(usuarios, inputUsernameLogin.value, inputPassLogin.value);

        if (!data) {
            Swal.fire({
                title: '¡Oops!',
                text: 'El usuario y/o la contraseña no son correctos. Por favor, vuelva a intentarlo',
                icon: 'error',
                iconColor: '#ff00f00',
                confirmButtonText: 'Salir',
                timer: 3000
            })
        } else {

            if (checkRecordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            modal.hide();
            presentarInfo(elementosToggleables, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(elementosToggleables, 'd-none');
});

estaLogueado(recuperarUsuario(localStorage));




const estiloTarjeta = document.querySelector('#estiloTarjeta');
const btnMostrar = document.querySelector('#mostrar');
const seleccionarCategoria = document.querySelector('#categoria');


const crearTarjeta = (array) => {
    estiloTarjeta.innerHTML = ''
    array.forEach(element => {
        let card = 
        `<div class="card">
            <h4 class="card-header" id="nombreItem">${element.nombre}</h4>
            <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom d-block mx-auto imgItems" id="fotoItem">
            <div class="card-body">
                <p class="card-text" id="tipo">Tipo: ${element.tipo}</p>
                <p class="card-text" id="precio">Precio: ${element.precio} monedas de oro</p>
                <a href="${element.url}" class="btn d-flex justify-content-center btn-secondary">Más información</a>
            </div>
        </div>`
        estiloTarjeta.innerHTML += card;
    });

}

function filtrarCategoria(array) {
    let categoria = seleccionarCategoria.value;
    if (!categoria) {
        return array;
    } else {
        return array.filter((item) => item.categoria == categoria);
    }
}

btnMostrar.addEventListener('click', () => {
    fetch('./js/items.json')
        .then((respuesta) => respuesta.json())
        .then((items) => {
            localStorage.setItem('item',JSON.stringify(items));
            crearTarjeta(filtrarCategoria(items));
        })
})

