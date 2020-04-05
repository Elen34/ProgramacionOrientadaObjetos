const ConenidoTweet = document.querySelector('#txtweet'); // leer el id del textarea
const listatweets = document.querySelector('#lista-tweets'); //leer el id del ul

EventListener();
CargarTweetLS();

function EventListener(){
    
    document.querySelector("#formulario").addEventListener('submit', ObtenerFormulario);
    //Me trae los elementos del id 
    listatweets.addEventListener('click', EliminarTweet);
}

function ObtenerFormulario(event){
    event.preventDefault(); // Te ayuda a no cargar de nuevo el formulario

    if(ConenidoTweet.value.trim() == "") return;//trim quita el primer y ultimo espacio de un texto

    const InstanciaTweet = new Tweet(ConenidoTweet.value); // instanciando el contenido del tweet
    InstanciaTweet.AgrregarTweetDom(listatweets, true);// agregar lo que esta en el valor tweet
    ConenidoTweet.value="";
}

//Eliminar el contenido del tweet
function EliminarTweet(event){
    Tweet.EliminarTweetDOM(event);
}

//Imprimir el valor en la pagina
function CargarTweetLS(){

    const TweetsLS = ManagelocalStorage.ObtenerLocalStorage();

    for(let i=0; i<TweetsLS.length; i++){

        const InstanciaTweet = new Tweet(TweetsLS[i]);
        InstanciaTweet.AgrregarTweetDom(listatweets, false);
    }
}