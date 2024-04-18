const usuarios = {
    profe: { username: "profefavorito", password: "123456" },
    alumno: { username: "alumno", password: "galactico" }
};

function verificarAutenticacion() {
    const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    /* 
    if (usuarioAutenticado === 'profe') {
        window.location.href = 'index.html';
    } else if (usuarioAutenticado === 'alumno') {
        window.location.href = 'alumno.html';
    } else {
        localStorage.setItem('usuarioAutenticado', 'profe');
    }*/
    
}

function iniciarSesion() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === usuarios.profe.username && password === usuarios.profe.password) {
        localStorage.setItem('usuarioAutenticado', 'profe');
        window.location.href = 'dashboard.html';
    } else if (username === usuarios.alumno.username && password === usuarios.alumno.password) {
        localStorage.setItem('usuarioAutenticado', 'alumno');
        window.location.href = 'alumno.html';
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
