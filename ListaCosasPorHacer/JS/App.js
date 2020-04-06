const Contenidotodo = document.querySelector("#Todo"); //leer el valor del textarea
const ListasPendientes = document.querySelector("#listadopendientes");
const ListasFinalizadas = document.querySelector("#listadofinalizado");

EventListener();
CargarListadoLS();
//enviar al dar click al formulario
function EventListener() {
  document
    .querySelector("#formulario")
    .addEventListener("submit", ObtenerFormulario);

  // para que el boton escuche al darle click finalizar la lista
  ListasPendientes.addEventListener("click", FinalizarListas);
}

function ObtenerFormulario(event) {

  event.preventDefault();
  if (Contenidotodo.value.trim() == "") return;
  const MostrarListado = new Todo(Contenidotodo.value);
  MostrarListado.AgregarListasTODO(ListasPendientes, true);
}

function FinalizarListas(event) {
  Todo.FinalizarListasTODO(event)  
    const ListaFinalizada = new Todo(Contenidotodo.value);
    ListaFinalizada.ImprimirListasFinalizadas(ListasFinalizadas);
}

function CargarListadoLS(){

    const ListadoLS = ManipularLocalStorage.ObtenerTODOLS();

    for(let i=0; i<ListadoLS.length; i++){

        const MostrarListas = new Todo(ListadoLS[i]);
        MostrarListas.AgregarListasTODO(ListasPendientes, false);
    }

}


