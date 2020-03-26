class Foco {

    estado = false;

    Cambiarestado(){

        this.estado = !this.estado; // Para que el if entre como true

        if(this.estado){
            return "./../Assets/Focoprendido.jpg";
        }else{
            return "./../Assets/focoapagado.jpg";
        }

    }
}