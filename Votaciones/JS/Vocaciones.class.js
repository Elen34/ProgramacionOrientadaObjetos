class Votaciones{

    Afavor = 0;
    Encontra = 0;
    Abstencion = 0;

    ContarVotos(ContarVotos){

        switch (ContarVotos){

            case 'A favor':
                
                this.Afavor++;
                break;

            case 'En contra':

                this.Encontra++;
                break;

            case 'Abstencion':

                this.Abstencion++;
                break;    

                default:
                break;
        }
 
    }

    VerificarGanador(){

        if(this.Afavor > this.Encontra){
            if(this.Afavor > this.Abstencion){
              
                alert('El ganador de los votos es: A Favor con:'+ ' ' + this.Afavor + '' + 'votos');
            }
            else{
                console.log(this.Abstencion);
                
                alert('El ganador de los votos es: Abstencion con:'+ ' ' + this.Abstencion +' '+ 'votos');;
            }
        }else{
        
            if(this.Encontra > this.Abstencion){
        
                alert('El ganador de los votos es: En Contra con:'+ ' ' + this.Encontra + ' '+ 'votos');
                
        }else{

            alert('El ganador de los votos es: Abstencion con:'+ ' ' + this.Abstencion + ' '+ 'votos');
        }

    }

}
}


