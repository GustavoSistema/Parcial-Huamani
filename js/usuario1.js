document.addEventListener('DOMContentLoaded', function () {
    mostrarUltimosViajes();

    const botonVerMas = document.getElementById('boton-ver-mas');
    botonVerMas.addEventListener('click', function () {
        mostrarTodosLosViajes();
        botonVerMas.style.display = 'none';
    });

    const botonSalir = document.getElementById('boton-salir');
    botonSalir.addEventListener('click', function () {
        localStorage.removeItem('usuarioAutenticado');
        window.location.href = 'index.html';
    });
});

const viajesUsuario = [
    { fecha: '2024-04-12', duracion: '2 horas', origen: 'Casa', destino: 'Trabajo', conductor: 'Juan Pérez' },
    { fecha: '2024-04-10', duracion: '1.5 horas', origen: 'Trabajo', destino: 'Casa', conductor: 'María González' },
    { fecha: '2024-04-08', duracion: '1 hora', origen: 'Casa', destino: 'Supermercado', conductor: 'Carlos Rodríguez' },
    { fecha: '2024-04-06', duracion: '45 minutos', origen: 'Supermercado', destino: 'Casa', conductor: 'Ana López' },
    { fecha: '2024-04-04', duracion: '3 horas', origen: 'Casa', destino: 'Gimnasio', conductor: 'Pedro Martínez' },
    { fecha: '2024-04-02', duracion: '1.5 horas', origen: 'Gimnasio', destino: 'Casa', conductor: 'Laura Sánchez' },
    { fecha: '2024-03-30', duracion: '2 horas', origen: 'Casa', destino: 'Biblioteca', conductor: 'Alejandro Gómez' },
    { fecha: '2024-03-28', duracion: '1 hora', origen: 'Biblioteca', destino: 'Casa', conductor: 'Sofía Rodríguez' },
    { fecha: '2024-03-26', duracion: '1.5 horas', origen: 'Casa', destino: 'Parque', conductor: 'Daniel Pérez' },
    { fecha: '2024-03-24', duracion: '30 minutos', origen: 'Parque', destino: 'Casa', conductor: 'Elena Martínez' }
];

function mostrarUltimosViajes() {
    const listaViajes = document.getElementById('lista-viajes');
    const ultimosViajes = viajesUsuario.slice(0, 4);

    ultimosViajes.forEach(viaje => {
        const itemViaje = document.createElement('li');
        itemViaje.classList.add('collection-item');
        itemViaje.textContent = `${viaje.fecha} - Duración: ${viaje.duracion} - Origen: ${viaje.origen} - Destino: ${viaje.destino} - Conductor: ${viaje.conductor}`;
        listaViajes.appendChild(itemViaje);
    });
}

function mostrarTodosLosViajes() {
    const listaViajes = document.getElementById('lista-viajes');
    listaViajes.innerHTML = '';

    viajesUsuario.forEach(viaje => {
        const itemViaje = document.createElement('li');
        itemViaje.classList.add('collection-item');
        itemViaje.textContent = `${viaje.fecha} - Duración: ${viaje.duracion} - Origen: ${viaje.origen} - Destino: ${viaje.destino} - Conductor: ${viaje.conductor}`;
        listaViajes.appendChild(itemViaje);
    });
}
