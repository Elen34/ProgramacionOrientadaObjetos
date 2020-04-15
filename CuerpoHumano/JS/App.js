const Imagen = document.getElementById("CuerpoHumano");
const ImprimirPartesCuerpo = document.getElementById("ImprimirPartesHumano");

EventListener();

function EventListener(){
    Imagen.addEventListener("mousemove", PartesCuerpo);
}

function PartesCuerpo(event){
    
    const Idioma = document.getElementById("Idioma").value;

    if(Idioma != ''){

       ImprimirPartesCuerpo.innerText 
       = CuerpoHumano.SeleccionarPartesCuerpo(event.x,event.y, Idioma);  
    }    
}
