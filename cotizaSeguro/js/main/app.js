const Anio = document.getElementById('anio');

llenarSelectAnio();
EventListener();

function EventListener(){
    document.querySelector('#cotizar-seguro').addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro(event){

    event.preventDefault();
    const MarcaSeleccionada = document.getElementById('marca').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const ValueAnio = Anio.value;

    const interfaz = new Interfaz();
    if(MarcaSeleccionada == '' || tipo == '' || ValueAnio == ''){
        interfaz.MostrarMensaje('Faltan Datos, favor de revisar el formulario', 'Error');
        return;
    }

    const resultado = document.querySelector('#resultado div');

    if(resultado != null) resultado.remove();

    const seguro = new Seguro(MarcaSeleccionada,ValueAnio, tipo);
    const total = seguro.CotizarSeguro();
    interfaz.MostrarResultado(seguro, total);
    interfaz.MostrarMensaje("Cotizando...., Exito");    
    
}

function llenarSelectAnio(){
    const Max = new Date().getFullYear(); // cargar la fecha del dia
    const Min = Max - 20;

    for (let i = Max; i>Min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        Anio.appendChild(option);  
    }

}