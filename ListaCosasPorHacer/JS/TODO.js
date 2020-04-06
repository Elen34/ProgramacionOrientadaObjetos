class Todo {
  contenidolistado = "";
  localStorage;

  constructor(contenidolistado) {
    this.contenidolistado = contenidolistado;
  }

  AgregarListasTODO(contenedor, origen) {
    //Imprimirlo en un lista
    const Agregarlistado = document.createElement("li");
    Agregarlistado.classList = "list-group-item text-break mt-2";
    Agregarlistado.textContent = this.contenidolistado;
    contenedor.appendChild(Agregarlistado);

    const button = document.createElement("button");
    button.classList = "close";
    Agregarlistado.appendChild(button);

    const span = document.createElement("span");
    span.classList = "badge badge-pill text-dark";
    span.textContent = "X";
    button.appendChild(span);

    if(origen) ManipularLocalStorage.AgregarTODOLS(this.contenidolistado);

  }
  //Finalizar tareas
  static FinalizarListasTODO(event) {

    if (event.target.tagName !== "SPAN") return;
    const liborrado = event.target.parentElement.parentElement;
    let textoborrado = liborrado.textContent;
    textoborrado = textoborrado.substring(0, textoborrado.length -1);

    ManipularLocalStorage.EliminarTODO(textoborrado);
    liborrado.remove();
  }

     ImprimirListasFinalizadas(contenedor){
        const listadofinalizado = document.createElement('li');
        listadofinalizado.classList = "list-group-item text-break mt-2";
        listadofinalizado.textContent = this.contenidolistado;
        contenedor.appendChild(listadofinalizado);

        const liborrado = event.target.parentElement.parentElement;
        let textoborrado = liborrado.textContent;
        textoborrado = textoborrado.substring(0, textoborrado.length -1);
    
        ManipularLocalStorage.EliminarTODO(textoborrado);
        liborrado.remove();

        ManipularLocalStorage.EliminarTODO(textoborrado);
      }
      }

