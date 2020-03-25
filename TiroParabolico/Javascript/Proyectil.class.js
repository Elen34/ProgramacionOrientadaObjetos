class Proyectil {
  velocidadinicial = 0;
  angulo = 0;

  constructor(velocidadinicial, angulo) {
    //Hacemos referencia a estas propiedades
    this.velocidadinicial = velocidadinicial;
    this.angulo = angulo;
  }

  calculardistanciaX(t) {
    const DistanciaX =
      this.velocidadinicial * Math.cos(this.angulo * (Math.PI / 180)) * t;

    return DistanciaX;
  }

  calculardistanciaY(t) {
    let DistanciaY =
      this.velocidadinicial * Math.sin(this.angulo * (Math.PI / 180));

    DistanciaY = DistanciaY * t - 0.5 * 9.8 * Math.pow(t, 2);

    return DistanciaY;
  }

  crearSpan() {
    for (let tiempo = 0; tiempo <= 7; tiempo += 0.03) {
      const span = document.createElement("span");
      const left = this.calculardistanciaX(tiempo);
      const bottom = this.calculardistanciaY(tiempo);

      if (left < 0 || bottom < 0 || left > 99 || bottom > 99) break;

      span.style.left = `${this.calculardistanciaX(tiempo)}%`;
      span.style.bottom = `${this.calculardistanciaY(tiempo)}%`;

      document.getElementById("contenedor").appendChild(span);
    }
  }
}
