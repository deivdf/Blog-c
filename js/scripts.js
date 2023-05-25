//querySelectoy

const heading = document.querySelector('.header__texto h2');//devuelve 0 o 1 elemento tambien se puede usar para id
heading.textContent = 'Nuevo Heading blog de cafe'
heading.classList.add('nueva-clase');
console.log(heading);
//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces)//devuelve un arreglo enlaces[0]

enlaces[0].textContent = 'Nuevo texto para enlaces';
//enlaces[0].href = 'http://google.com'
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

const heading2 = document.getElementById('heading');
//console.log(heading2)

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');;

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html'
// agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace'
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);
//Eventos
console.log(1);

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
});

window.onload = function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //solo espera por el HTML, no espera CSS o imagenes
    console.log(4);
})

console.log(5);

function imprimir(){
    console.log(2);
}

window.onscroll = function(evento){
    console.log(evento);
    console.log('scrolling...');
}

//seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    console.log(evento.target);
    evento.preventDefault();
    //validar un formulario


    console.log('enviando formulario');
})