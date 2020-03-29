const Imagen = document.getElementById("Carro");
const carro = new Car(0,0);
let contenedor = document.getElementById('contenedor');

EventListener();

function EventListener(){
    document.addEventListener('keydown', movecar);
    contenedor.addEventListener('click', PonerPremio);
}

function movecar(event){

    console.log(event);
    
    carro.MoverCarro(event.key,Imagen);
    console.log(event.key);

}

function PonerPremio(event){

    console.log(event);

    const premio = new Premios(event.x,event.y);

    premio.crearImagen(contenedor);

}