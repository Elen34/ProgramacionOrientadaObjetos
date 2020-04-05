class ManagelocalStorage {

   static ArrayTweet  = [];   //Arreglo Vacio, se agrega static para que relacione la variable

  static AgregarTweetLocalStorage(ContenidoTweet){ //metodo que tiene la informacion

        this.ArrayTweet = this.ObtenerLocalStorage(); // retorn una arreglo vacio o los elementos creados

        this.ArrayTweet.push(ContenidoTweet);

        localStorage.setItem('tweets', JSON.stringify(this.ArrayTweet)); 
    }

    static ObtenerLocalStorage(){
        let TweetsObtenidosLocalStorage = [];

        if(localStorage.getItem('tweets')=== null){
            return TweetsObtenidosLocalStorage;
        } 
        return JSON.parse(localStorage.getItem('tweets'));

    }

    //Recibe un texto
    static EliminarTweetLS(contenido){
    
        let TweetLS = this.ObtenerLocalStorage();
        let ArrayNuevoTweetLS = [];

        for(let i=0; i<TweetLS.length; i++){

            if(contenido != TweetLS[i]){

                ArrayNuevoTweetLS.push(TweetLS[i]);
            }
        }

        localStorage.setItem('tweets', JSON.stringify(ArrayNuevoTweetLS))
    }
}


//SetItem para guardar los datos en localstorage, hace referencia al elemento a guardar la info
//JSON.stringify Convertir cualquien valor en un string;
//JSON.parse convierte al string a un array.
