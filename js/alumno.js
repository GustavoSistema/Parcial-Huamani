document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('encuesta');
    const resultado = document.getElementById('resultado'); 
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const seleccion = document.querySelector('input[name="profesor"]:checked');
        if (seleccion) {
            resultado.textContent = 'Profesor seleccionado: ' + seleccion.value;
        } else {
            resultado.textContent = 'Por favor, selecciona un profesor.';
        }
    });
});
