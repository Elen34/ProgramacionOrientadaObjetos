class CuerpoHumano{

    posicionX = 0;
    posicionY = 0;

    constructor(posicionX,posicionY){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    SeleccionarPartesCuerpo(Partes){        
        if (this.posicionX >= 360 && this.posicionX <= 450 && this.posicionY >= 174 && this.posicionY <= 180) {
            Partes.innerText = 'Cabeza';
        }  else if (this.posicionX >= 300 && this.posicionX <= 180 && this.posicionY >= 440 && this.posicionY <= 261) {
            Partes.innerText = 'Pecho';
        } else if (this.posicionX >= 420 && this.posicionX <= 396 && this.posicionY >= 450 && this.posicionY <= 396) {
            Partes.innerText = 'Pie Derecho';
        } else if (this.posicionX >= 340 && this.posicionX <= 396 && this.posicionY >= 359 && this.posicionY <= 396) {
            Partes.innerText = 'Pie Izquierdo';
        } else if (this.posicionX >= 404 && this.posicionX <= 432 && this.posicionY >= 321 && this.posicionY <= 354) {
            Partes.innerText = 'Mano Derecha';
        }else if (this.posicionX >= 150 && this.posicionX <= 160 && this.posicionY >= 240 && this.posicionY <= 270) {
            Partes.innerText = 'Mano Izquierdo';
        }
         else {
            Partes.innerText = 'No seleccionado';
        }
    }

}