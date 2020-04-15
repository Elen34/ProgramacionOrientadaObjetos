class CuerpoHumano{

    X = 0;
    Y = 0;
    ParteCuerpo = '';

    constructor(X,Y){
        this.X = X;
        this.Y = Y;
    }

    static SeleccionarPartesCuerpo(PosicionX, PosicionY, Idioma){   

        console.log(PosicionX, PosicionY);
        
        if (PosicionX >= 347 && PosicionX <= 402 && PosicionY >= 115 && PosicionY <= 196) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Cabeza';
            }else {
            this.ParteCuerpo = 'Head'; 
            }
        }
        else if (PosicionX >= 315 && PosicionX <= 445 && PosicionY >= 197 && PosicionY <= 226) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Cuello';
            }else {
            this.ParteCuerpo = 'Neck'; 
            }
        }
        else if (PosicionX >= 320 && PosicionX <= 430 && PosicionY >= 224 && PosicionY <= 285) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Pecho';
            }else {
            this.ParteCuerpo = 'Chest'; 
            }
        }
        else if (PosicionX >= 335 && PosicionX <= 417 && PosicionY >= 281 && PosicionY <= 320) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Estomago';
            }else {
            this.ParteCuerpo = 'Stomach';         
            }
        }
        else if (PosicionX >= 418 && PosicionX <= 462 && PosicionY >= 214 && PosicionY <= 364) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Brazo Izquierdo';
            }else {
            this.ParteCuerpo = 'Left Arm'; 
            }
        }
        else if (PosicionX >= 454 && PosicionX <= 489 && PosicionY >= 338 && PosicionY <= 387) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Mano Izquierda';
            }else {
            this.ParteCuerpo = 'Left Hand'; 
            }
        }
        else if (PosicionX >= 289 && PosicionX <= 315 && PosicionY >= 216 && PosicionY <= 360) {
            if(Idioma == 1) {
            this.ParteCuerpo = 'Brazo Derecho';
            }else {
            this.ParteCuerpo = 'Right Arm'; 
            }
        }
        else if (PosicionX >= 257 && PosicionX <= 298 && PosicionY >= 328 && PosicionY <= 379) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Mano Derecha';
            }else {
            this.ParteCuerpo = 'Right Hand'; 
            }
        }
        else if (PosicionX >=381 && PosicionX <= 422 && PosicionY >= 300 && PosicionY <= 524) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Pierna Izquierda';
            }else {
            this.ParteCuerpo = 'Left Leg'; 
            }
        }
           else if (PosicionX >= 383 && PosicionX <= 417 && PosicionY >= 524  && PosicionY <=583) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Pie Izquierdo';
            }else {
            this.ParteCuerpo = 'Left Foot'; 
            }

     } else if (PosicionX >= 330 && PosicionX <= 372 && PosicionY >= 300 && PosicionY <= 524) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Pierna Derecha';
            }else {
            this.ParteCuerpo = 'Left Leg'; 
            }

        }else if (PosicionX >= 335 && PosicionX <= 366 && PosicionY >=524 && PosicionY <=583) {
           
            if(Idioma == 1) {
            this.ParteCuerpo = 'Pie Derecho';
            }else {
            this.ParteCuerpo = 'Right foot'; 
            }
         } else {
            this.ParteCuerpo = 'Undefined';
        }
        return(this.ParteCuerpo);  
    }
}
