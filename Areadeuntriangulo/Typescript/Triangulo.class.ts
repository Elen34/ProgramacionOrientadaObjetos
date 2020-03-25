export class Triangulo { //export la clase se va a utilizar en otro archivo

     // La variable public se puede utilizar fuera de la clase
    public base: number = 0;
    public altura:number = 0;
    public area:number = 0;

    constructor(base:number, altura:number ){ //Se declara la variable tipo number
    
        this.base = base;
        this.altura = altura;

        this.area = (this.base * this.altura) / 2;
    }

} 