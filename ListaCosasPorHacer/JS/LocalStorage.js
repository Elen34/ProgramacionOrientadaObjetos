class ManipularLocalStorage {
  static ArrayTODO = [];

  static AgregarTODOLS(contenidos) {

    this.ArrayTODO = this.ObtenerTODOLS();
    this.ArrayTODO.push(contenidos);
    localStorage.setItem("Listado", JSON.stringify(this.ArrayTODO));
  }

  static ObtenerTODOLS() {
    let TODOobtenidoLS = [];

    if (localStorage.getItem("Listado") === null) {
      return TODOobtenidoLS;
    }

    return JSON.parse(localStorage.getItem("Listado"));
  }

  static EliminarTODO(contenido){

    let ListasLS = this.ObtenerTODOLS();
    let newarraylistado = [];

    for(let x=0; x<ListasLS.length; x++){

        if(contenido!=ListasLS[x]){
            newarraylistado.push(ListasLS[x]);
        }
    }

    localStorage.setItem('Lista',JSON.stringify(newarraylistado));
  }
}
