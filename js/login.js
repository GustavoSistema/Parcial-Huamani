const usuarios = {
    usuario1: { username: "usuario1", password: "123456" },
    conductor: { username: "conductor", password: "123456" }
};

function verificarAutenticacion() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (usuarioAutenticado === 'usuario1') {
        window.location.href = 'dashboard.html';
    } else if (usuarioAutenticado === 'conductor') {
        window.location.href = 'conductor.html';
    }
}

function iniciarSesion() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === usuarios.usuario1.username && password === usuarios.usuario1.password) {
        localStorage.setItem('usuarioAutenticado', 'usuario1');
        window.location.href = 'dashboard.html';
    } else if (username === usuarios.conductor.username && password === usuarios.conductor.password) {
        localStorage.setItem('usuarioAutenticado', 'conductor');
        window.location.href = 'conductor.html';
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Verifica tus credenciales",
            icon: "error"
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    verificarAutenticacion();
    
    const botonLogin = document.getElementById('login');
    botonLogin.addEventListener('click', iniciarSesion);
});
