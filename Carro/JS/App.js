const Imagen = document.getElementById("Carro");
const carro = new Car(0,0);
let contenedor = document.getElementById('contenedor');
let SizeMarginLeft = 0;
let PosicionImagenes = [];
let ContadorPuntos = 0;
const ImprimirPuntos = document.getElementById('ImprimirPuntos');

EventListener();

function EventListener(){

    ObtenerMargin();
    document.addEventListener('keydown', movecar);
    contenedor.addEventListener('click', PonerPremio);
    window.addEventListener('resize', ObtenerMargin);
    //se ejecuta cada vez que se cambia la pantalla
}

function movecar(event){

    carro.MoverCarro(event.key,Imagen);
    carro.Verificarcolision(PosicionImagenes); // Para verificar llamar la funcion carro

    const Response = carro.Verificarcolision(PosicionImagenes);

    if(Response != null){
        Premios.EliminarPremio(contenedor, PosicionImagenes[Response].id);
        PosicionImagenes.splice(Response,1); //
        
        ContadorPuntos++;
        ImprimirPuntos.innerText = `${ContadorPuntos}`;  

        for(let x=0; x<=PosicionImagenes.length; x++){
            const CheckPremio = document.getElementById('CheckPremio');
            CheckPremio.play();

            if(PosicionImagenes == ''){    
                alert('¡¡¡Felicidades Ganaste!!!');
                const SonidoGanador = document.getElementById('Sound');
                SonidoGanador.play();
            }
        }
      
    }
}

function PonerPremio(event){
    
   const premio = new Premios(event.x,event.y);
   PosicionImagenes.push(premio.crearImagen(contenedor,SizeMarginLeft));
}

function ObtenerMargin(){
    const MarginContainer = window.getComputedStyle(contenedor).getPropertyValue("margin-left"); 
    // obtiene un elemento del style del contenedor
    SizeMarginLeft = MarginContainer.substring(0,MarginContainer.length-2); //posicion 0 y 1 
}