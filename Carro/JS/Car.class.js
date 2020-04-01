class Car{
    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    MoverCarro(direccion, imagen){

        switch (direccion){
            case "ArrowUp":
            if(this.posicionY <= 0) return; // No se salga del recuadro    
            imagen.src = './../Assets/CarroTrasero.jpeg'; //Cambiar de imagen
            imagen.style.top = `${this.posicionY-=10}px`; // Hacer caminar el carro
            break;

            case "ArrowLeft":
            if(this.posicionX <= 0) return;    
            imagen.src = './../Assets/CarrolateralIzq.jpeg';
            imagen.style.left = `${this.posicionX-=10}px`; // Hacer caminar el carro
            break;

            case "ArrowRight":
            if(this.posicionX >= 1050) return;
            imagen.src = './../Assets/CarrolateralDer.jpeg';
            imagen.style.left = `${this.posicionX+=10}px`; // Hacer caminar el carro
            break;

            case "ArrowDown":
            if(this.posicionY >= 475) return;
            imagen.src = './../Assets/CarroFrontal.jpeg';
            imagen.style.top = `${this.posicionY+=10}px`; // Hacer caminar el carro
            break;
        }
    }

   Verificarcolision(PosicionesCaquitas = []) {
        
        for(let i=0; i<PosicionesCaquitas.length; i++){
            if(
                this.posicionX >= PosicionesCaquitas[i].styleleft && 
                this.posicionX <= PosicionesCaquitas[i].styleLeftMax && 
                this.posicionY >= PosicionesCaquitas[i].sytletop && 
                this.posicionY <= PosicionesCaquitas[i].sytleTopMax
            ){
                return i;
            }
        }
        return null;
    }
}