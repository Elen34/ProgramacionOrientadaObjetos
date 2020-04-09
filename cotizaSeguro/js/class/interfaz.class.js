class Interfaz{

    MostrarMensaje(mensaje,tipo){

        const div = document.createElement('div');

        if(tipo == 'error'){

            div.classList.add('mensaje', 'error');

        }else{
            div.classList.add('mensaje', 'correcto');
        }

        div.innerHTML = `${mensaje}`;

        document
        .querySelector('#cotizar-seguro')
        .insertbefore(div,document.querySelector('.form-group'));
        //Insertar antes del formulario un div form-group

        setTimeout(function(){ //funcion anonima, se ejecuta sin necesidad de nombrarse
            document.querySelector('.mensaje').remove(); //LLama a la clase mensaje, para que no lo ejecute siempre
        }, 5000) //ingresas cuanto tiempo se ejecuta, aqui seleccion 5000milisegundos
        //cronimetro, es un codigo que funciona a cierto tiempo
    }


    MostrarResultado(seguro, total){

        const resultado = document.getElementById('resultado');
        let marca = "";

        switch(seguro.marca){
            case "1":
                marca="Americano";
                break;
            case "2":
                marca="Asiatico";
                break;
            case "3":
                marca="Europeo";
                break;
        }

        const div = document.createElement('div');
        div.innerHTML = `
            <p class="header">Cotizacion:</p>
            <p>Marca:${marca}</p>
            <p>Anio:${seguro.anio}</p>
            <p>Tipo:${seguro.tipo}</p>
            <p>Total:${total}</p>    
        `;

        const spinner = document.querySelector("#cargando img");
        spinner.style.display = "block";

        setTimeout(function (){
            spinner.style.display = "none";
            resultado.appendChild(div);
        },5000);
    }
}