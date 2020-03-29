class Premios {
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY){

       this.posicionX = posicionX;
       this.posicionY = posicionY; 

    }

    crearImagen(contenedor){

        const Imagen = document.createElement('img');
        Imagen.src = './../Assets/Popo.jpeg';

        Imagen.style.left = `${this.posicionX}px`; // Para que agarre los pixeles de la imagen
        Imagen.style.top =`${this.posicionY}px`;

        contenedor.appendChild(Imagen);
    }

}