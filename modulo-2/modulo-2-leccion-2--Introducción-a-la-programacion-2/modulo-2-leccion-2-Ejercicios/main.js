'use strict';



// --------LECCION 2.2.1 - EJERCICIO 2------------
// Crea una clase nueva para destacar el texto OLA! y añádela con JavaScript al elemento con clase super-wave. Prueba a loguear la constante superWave

// const superWave = document.querySelector('.super-wave');
// superWave.classList.add ('.superBlack');

// --------LECCION 2.2.2 - EJERCICIO 1------------
// El precio de la fruta
// Imagina que vamos a la frutería y compramos lo siguiente:

// 2 kilos de kiwis a 5€ / kg

// 3 kilos de peras conferencia (no una cualquiera) a 2€ / kg

// Medio kilo de uvas a 4€ / kg

// Calcula el precio total como si lo hiciésemos en una hoja de papel de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.

const kiwi = 5 * 2;
const pera = 2 * 3;
const uvas = 4 / 2;
const resultadoFrutas = kiwi + pera + uvas;
console.log (resultadoFrutas);


// --------LECCION 2.2.2 - EJERCICIO 2------------
// 2. Calcular el número total de horas que hemos vivido
// Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.


const horasdia = 24;
const diasAño =365;
const edad= 60;
const horasVividas= (horasdia * diasAño) * edad;
console.log (horasVividas);

// --------LECCION 2.2.3 - EJERCICIO 1------------
// 1. Lista de perretes
// Pinta tres elementos li dentro de una lista ul con la información de gatitos: un nombre y una foto, los obtendremos a partir de los siguientes datos:
// Para añadir cada uno de los elementos utiliza la propiedad innerHTML y la interpolación de cadenas.

const listElement = document.querySelector(".js-list");

const firstDogImage =
  '<li> <img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg"> </li>';
const firstDogName = '<li> Dina <li>';


const secondDogImage =
'<li> <img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"> </li>';
const secondDogName = '<li> Luna </li>';

const thirdDogImage =
'<li> <img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"> </li>';
const thirdDogName = '<li> Lana </li>';

listElement.innerHTML = firstDogImage + firstDogName + secondDogImage + secondDogName + thirdDogImage + thirdDogName;