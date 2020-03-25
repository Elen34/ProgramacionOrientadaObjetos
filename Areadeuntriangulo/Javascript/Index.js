"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Triangulo_class_1 = require("./Triangulo.class");
EventListener();
function EventListener() {
    document
        .getElementById('btnCalcular').addEventListener('click', CalcularArea);
}
function CalcularArea() {
    const Altura = Number(document.getElementById('altura'));
    const Base = Number(document.getElementById('base'));
    const triangulo = new Triangulo_class_1.Triangulo(Altura, Base);
    console.log(triangulo.area);
}
