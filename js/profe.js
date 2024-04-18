
const cursosProfesor = [
    { nombre: "Curso de Matemáticas", descripcion: "Es el estudio de entes abstractos y sus relaciones como números, figuras geométricas, y símbolos. El objetivo de las matemáticas es desarrollar el razonamiento lógico o pensamiento matemático, a través de la práctica de un lenguaje simplificado con herramientas para la solución de diferentes tipos problemas." },
    { nombre: "Curso de Historia", descripcion: "La Historia es una ciencia que estudia, reconstruye y analiza los procesos históricos de las sociedades a través del tiempo, para poder comprender el presente con una visión de futuro. Su estudio forma la conciencia histórica de los ciudadanos." },
    { nombre: "Curso de Ciencias", descripcion: "Conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente. 2." }
];

function mostrarCursos() {
    const listaCursos = document.getElementById('lista-cursos');
    listaCursos.innerHTML = '';
    cursosProfesor.forEach(curso => {
        const itemCurso = document.createElement('li');
        itemCurso.classList.add('collection-item');
        itemCurso.textContent = curso.nombre;
        itemCurso.addEventListener('click', () => {
            mostrarDescripcion(curso.descripcion);
        });

        listaCursos.appendChild(itemCurso);
    });
}

function mostrarDescripcion(descripcion) {
    const descripcionCurso = document.getElementById('descripcion-curso');
    const textoDescripcion = document.getElementById('texto-descripcion');

    textoDescripcion.textContent = descripcion;
    descripcionCurso.style.display = 'block';
}

window.onload = mostrarCursos;
