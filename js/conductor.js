document.addEventListener('DOMContentLoaded', function () {
    mostrarUsuariosAbordaron();
    mostrarTotalViajes();

    const botonSalir = document.getElementById('boton-salir');
    botonSalir.addEventListener('click', function () {
        localStorage.removeItem('usuarioAutenticado');
        window.location.href = 'index.html';
    });

    const botonVerMas = document.getElementById('boton-ver-mas');
    botonVerMas.addEventListener('click', function () {
        mostrarTodosUsuarios();
        botonVerMas.style.display = 'none';
    });
});

const usuariosAbordaron = [
    { nombre: 'Juan', veces: 5 },
    { nombre: 'Luiz', veces: 3 },
    { nombre: 'Pepe', veces: 8 },
    { nombre: 'TIto', veces: 2 },
    { nombre: 'Joel', veces: 6 },
    { nombre: 'Marcos', veces: 4 },
    { nombre: 'Gustavo', veces: 7 },
    { nombre: 'Mafer', veces: 1 },
    { nombre: 'Lucia', veces: 9 },
    { nombre: 'Luana', veces: 3 }
];

function mostrarUsuariosAbordaron() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    usuariosAbordaron.sort((a, b) => b.veces - a.veces);
    const primerosCincoUsuarios = usuariosAbordaron.slice(0, 5);

    primerosCincoUsuarios.forEach(usuario => {
        const usuarioItem = document.createElement('li');
        usuarioItem.classList.add('collection-item');
        usuarioItem.textContent = `${usuario.nombre} -----------------> ${usuario.veces} veces`;
        listaUsuarios.appendChild(usuarioItem);
    });
}


function mostrarTotalViajes() {
    const totalViajesSpan = document.getElementById('total-viajes');
    let totalViajes = 0;

    usuariosAbordaron.forEach(usuario => {
        totalViajes += usuario.veces;
    });

    totalViajesSpan.textContent = totalViajes;
}

function mostrarTodosUsuarios() {
    const listaUsuarios = document.getElementById('lista-usuarios');
    listaUsuarios.innerHTML = '';

    usuariosAbordaron.forEach(usuario => {
        const usuarioItem = document.createElement('li');
        usuarioItem.classList.add('collection-item');
        usuarioItem.textContent = `${usuario.nombre} -----------------> ${usuario.veces} veces`;
        listaUsuarios.appendChild(usuarioItem);
    });
}