class Tweet{
    contenido = "";
    localStorage;

    constructor(contenido){
        this.contenido = contenido;
    }

    //Se va a guardar nuestro tweet
  AgrregarTweetDom(contenedor, origen){

    const li =document.createElement('li');
    li.classList="list-group-item text-break";
    li.textContent = this.contenido;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList='close';

    const span = document.createElement('span');
    span.classList = "badge badge-pill text-danger";
    span.textContent='X';
    
    contenedor.appendChild(li);
    li.appendChild(btnEliminar);
    btnEliminar.appendChild(span);

    if(origen) ManagelocalStorage.AgregarTweetLocalStorage(this.contenido);
    }

    //Se elimina el tweet
  static EliminarTweetDOM(event){

        if(event.target.tagName !== "SPAN") return;
      const Liborrado = event.target.parentElement.parentElement;
      let TextoLiBorrado = Liborrado.textContent;
      TextoLiBorrado =  TextoLiBorrado.substring(0,Liborrado.textContent.length-1); //Eliminar el ultimo caracter
      ManagelocalStorage.EliminarTweetLS(TextoLiBorrado);
      Liborrado.remove();

     }
}

/*la diferencia entre class list y class list.add
class lista crea un lista html y el add concatena las dos listas

delegation - se crea un elemento, y solo realiza una action

local storage es una mini base de datos para guardar la informacion de nuestra 
aplicacion que tiene el navegador.
Solo tiene capacidad de 5 mb y no guarda imagenes solo texto y arreglos.
Sirve para recabar informacion, se puede acceder y mostrar la informacion
Contenedor especial para cada pagina.

TextContent - obtener el valor distinto a input
*/