let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados= []; 
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function asisgTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.textContent = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intento);
    if (numeroUsuario === numeroSecreto) {
     asisgTextoElemento('p', `acertaste el numero en ${intento} ${intento === 1 ? "vez":"veces"}`); 
     document.getElementById('reiniciar').removeAttribute('disabled');  
    }else {
        //El usuario no acepto
        if (numeroUsuario > numeroSecreto) {
            asisgTextoElemento('p', 'el numero secreto es menor');   
        }else{
            asisgTextoElemento('p', 'El numero secreto es mayor  ');  
        }
        intento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja( ){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecretos() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo )+ 1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asisgTextoElemento('p','Ya se sortearon todos los numero posible');
    }else{

    //Si el numero generedo esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecretos();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesIniciales(){
    asisgTextoElemento('h1', 'Juego del numero secreto!');
    asisgTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecretos();
    intento = 1;

}


function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();





