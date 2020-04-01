class Premios {
    posicionX = 0;
    posicionY = 0;

static EliminarPremio(contenedor, id){
    contenedor.removeChild(document.getElementById(`${id}`)); //Eliminar la caquita, cuando el carro pasa por ella
}    

    constructor(posicionX, posicionY){
       this.posicionX = posicionX;
       this.posicionY = posicionY; 
    }

    crearImagen(contenedor,SizeMarginLeft){

        const Imagen = document.createElement('img');
        Imagen.src = './../Assets/Popo.jpeg';
        Imagen.style.width = "50px";
        Imagen.id = `imagen${Math.random().toString().split('.')[1]}`;
    
        const styleleft = this.posicionX - SizeMarginLeft;
        const sytletop = this.posicionY;

        Imagen.style.left = `${styleleft}px `; // Para que agarre los pixeles de la imagen
        Imagen.style.top = `${sytletop-15}px `; 

        contenedor.appendChild(Imagen);

        return {
            id:Imagen.id,
            styleleft:styleleft-100,
            sytletop:sytletop-100,
            styleLeftMax: styleleft + 50,
            sytleTopMax: sytletop + 50
        }; // cuando la propiedad se llama igual que el valor, se puede omitir que escribirlo 2 veces
    }

}

//json es un arreglo de objetos
//Se puede retornar un objeto