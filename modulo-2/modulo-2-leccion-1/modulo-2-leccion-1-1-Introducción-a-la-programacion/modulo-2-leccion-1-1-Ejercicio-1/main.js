'use strict';


// Ejercicio1
// Crea una página HTML con un párrafo en el que ponga Hola y, usando JavaScript, vamos a cambiar ese texto por Hola Mundo.

// const titleElement = document.querySelector('.title');
// titleElement.innerHTML = 'Hola';

// titleElement.innerHTML= titleElement.innerHTML + ' mundo';





// Ejercicio 2
// Crea una página HTML que contenga un listado con tu nombre y el de tu compañera, y un título que diga "La Adalaber seleccionada es: ". Usando JavaScript, tenemos que cambiar el título añadiendo el nombre del primer li.
// La Adalaber seleccionada es: Lola
// Una vez hecho esto, cambia el código para que el nombre sea el del segundo li.

// const titleElement = document.querySelector('.title-two');
// const listItemOne = document.querySelector('.one');
// titleElement = 'La Adalaber seleccionada es:'
// listItemOne = 'Lola'
// titleElement.innerHTML = titleElement.innerHTML + listItemOne.innerHTML;






// Ejercicio 3
// 3. Lorem ipsum
// Crea una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src http://via.placeholder.com/350x150 y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".


const divElement = document.querySelector('.container');

const title = '<h1>Lorem Ipsum</h1>';
const image = '<img src="http://via.placeholder.com/350x150" alt=""></img>'
const text = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit"</p>'

divElement.innerHTML = title + image + text;