
EventListener();

const foco = new Foco();
const imagen = document.getElementById("imagen");

function EventListener() {
    document
    .getElementById('btncalcular')
    .addEventListener("click", EncenderApagar);
}

function EncenderApagar(){
 
   imagen.src = foco.Cambiarestado();

}

