class Car{
    PosicionX = 0;
    PosicionY = 0;

    constructor(PosicionX, PosicionY){
        this.PosicionX = PosicionX;
        this.PosicionY = PosicionY;
    }

    MoverCarro(direccion, imagen){

        switch (direccion){
            case "ArrowUp":
            if(this.PosicionY <= 0) return; // No se salga del recuadro    
            imagen.src = './../Assets/CarroTrasero.jpeg'; //Cambiar de imagen
            imagen.style.top = `${this.PosicionY--}%`; // Hacer caminar el carro
            break;

            case "ArrowDown":
            if(this.PosicionY >= 90) return;
            imagen.src = './../Assets/CarroFrontal.jpeg';
            imagen.style.down = `${this.PosicionY++}%`; // Hacer caminar el carro
            break;

            case "ArrowLeft":
            if(this.PosicionX <= 0) return;    
            imagen.src = './../Assets/CarrolateralIzq.jpeg';
            imagen.style.left = `${this.PosicionX--}%`; // Hacer caminar el carro
            break;

            case "ArrowRight":
            if(this.PosicionX >= 94) return;
            imagen.src = './../Assets/CarrolateralDer.jpeg';
            imagen.style.right = `${this.PosicionX++}%`; // Hacer caminar el carro
            break;

        }

    }
}