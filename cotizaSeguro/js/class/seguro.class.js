class Seguro{

    marca = "";
    anio = "";
    tipo = "";

    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    CotizarSeguro(){

        let CantidadTotalSeguro = 0;
        const base = 2000;

        switch (this.marca){
            case "1":
                CantidadTotalSeguro = base * 1.15;
                break; 

            case "2":
                CantidadTotalSeguro = base * 1.05;
                break;
            
            case "3":
                CantidadTotalSeguro = base * 1.35;
                break;     
        }

        const diferencia = new Date().getFullYear() - this.anio;
        CantidadTotalSeguro -= (diferencia * 3 * CantidadTotalSeguro)/100; 

        if(this.tipo == "basico"){
            CantidadTotalSeguro *= 1.30;
        }else{
            CantidadTotalSeguro *= 1.50;
        }
        return CantidadTotalSeguro;
    }
}