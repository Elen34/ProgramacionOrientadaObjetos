EventListener();

const Contenedor = document.getElementById('contenedor');
const votaciones = new Votaciones();

function EventListener(){

    document
    .getElementById('btnCambiar')
    .addEventListener('click', Cambiarventana);
    
}

function Cambiarventana(){

  const PreguntarVotacion = document.getElementById('IngresarMensaje').value; 

  if(PreguntarVotacion == "") return;

  eliminarPantalla();
  CrearOtraPantalla(PreguntarVotacion);
}

function eliminarPantalla(){

while (Contenedor.firstChild) {
  Contenedor.firstChild.remove(); // eliminar la pantalla con todos sus elementos
}

}

function CrearOtraPantalla(TextoVotaciones){

  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  Contenedor.appendChild(container);

  const jumbotron = document.createElement('div');
  jumbotron.setAttribute('class', 'jumbotron');
  Contenedor.appendChild(jumbotron);

  const row = document.createElement('div');
  row.setAttribute('class','row');
  jumbotron.appendChild(row);

  const column = document.createElement('div');
  column.setAttribute('class', 'col-12');
  row.appendChild(column);

  const Titulo = document.createElement('h3');
  Titulo.innerText = 'Votaciones';
  Titulo.setAttribute('class', 'text-center');
  column.appendChild(Titulo);

  const input = document.createElement('input');
  input.setAttribute('class','form-control');
  input.value = TextoVotaciones;
  input.disabled = true;
  column.appendChild(input);

  const row2 = document.createElement('div');
  row2.setAttribute('class','row');
  jumbotron.appendChild(row2);

  const column2 = document.createElement('div');
  column2.setAttribute('class', 'col-4');
  row2.appendChild(column2);

  const boton1 = document.createElement('button');
  boton1.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
  boton1.innerText = "A favor";
  column2.appendChild(boton1);

  const column3 = document.createElement('div');
  column3.setAttribute('class', 'col-4');
  row2.appendChild(column3);

  const boton2 = document.createElement('button');
  boton2.setAttribute('class', 'btn btn-outline-warning btn-block mt-3');
  boton2.innerText = "En contra";
  column3.appendChild(boton2);

  const column4 = document.createElement('div');
  column4.setAttribute('class', 'col-4');
  row2.appendChild(column4);

  const boton3 = document.createElement('button');
  boton3.setAttribute('class', 'btn btn-outline-dark btn-block mt-3');
  boton3.innerText = "Abstencion";
  column4.appendChild(boton3);

  const row3 = document.createElement('div');
  row3.setAttribute('class','row');
  jumbotron.appendChild(row3);

  const column5 = document.createElement('div');
  column5.setAttribute('class', 'col-12 mt-3');
  row3.appendChild(column5);

  const boton4 = document.createElement('button');
  boton4.setAttribute('class', 'btn btn-outline-info btn-block mt-3');
  boton4.innerText = "Finalizar";
  boton4.setAttribute('id', 'btnFinalizar');
  column5.appendChild(boton4);

  Clickbotones();
}

function Clickbotones(){

  const botones = document.getElementsByTagName('button');

  for(let i=0; i<botones.length; i++){

    botones[i].addEventListener('click', Contar); // escuchar al hacer click y contar los votos

  }

  document
  .getElementById('btnFinalizar')
  .addEventListener('click', CalcularVotos);

}

function Contar(e){

  votaciones.ContarVotos(e.target.innerText);


}

function CalcularVotos(){

  votaciones.VerificarGanador();
}

