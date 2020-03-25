import {Triangulo} from './Triangulo.class';
//importar clase triangulo del archivo class para poder utilizar el archivo


EventListener();

function EventListener() {

    document
        .getElementById('btnCalcular')!.addEventListener('click', CalcularArea); //? pregunta si el valor el nulo o no, !afirma que el valor es nulo

}

function CalcularArea() {

    //HTMLInputElement para indicarle a typescript que es un input
    //Altura es un tipo html input  element es tipo string
    const Altura: number = Number(<HTMLInputElement>document.getElementById('altura'));//getElementbyId regresa un elemento de html
    const Base: number = Number(<HTMLInputElement>document.getElementById('base'));

    //Para llamar a una clase seria con un objeto

    const triangulo = new Triangulo(Altura,Base);

    console.log(triangulo.area);
    

}