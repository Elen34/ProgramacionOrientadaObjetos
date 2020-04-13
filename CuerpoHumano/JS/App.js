const Imagen = document.getElementById("CuerpoHumano");
const ImprimirNombre = document.getElementById("ImprimirPartesHumano");
const idioma = document.getElementById("Idioma");

EventListener();

function EventListener(){
    Imagen.addEventListener("mouseover", PartesCuerpo);
}

function PartesCuerpo(){

    const cursor = new CuerpoHumano(event.x, event.y);
    cursor.SeleccionarPartesCuerpo(ImprimirNombre);
    console.log(cursor);
    console.log(ImprimirNombre);
    
}
