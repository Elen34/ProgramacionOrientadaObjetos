const Imagen = document.getElementById("Carro");
const carro = new Car(0,0);
let contenedor = document.getElementById('contenedor');
let SizeMarginLeft = 0;
let PosicionImagenes = [];

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
    }
}

function PonerPremio(event){

   const premio = new Premios(event.x,event.y);

   PosicionImagenes.push(premio.crearImagen(contenedor,SizeMarginLeft));
   console.log(PosicionImagenes);  

}

function ObtenerMargin(){

    const MarginContainer = window.getComputedStyle(contenedor).getPropertyValue("margin-left"); 
    // obtiene un elemento del style del contenedor
    SizeMarginLeft = MarginContainer.substring(0,MarginContainer.length-2); //posicion 0 y 1 
}