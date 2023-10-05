// Escribe tu código aquí.

/* 
1 traer los elementos del html
2 crear el arreglo para comprar
3 crear la funcion
4 agregar el evento del boton para iniciar la funcion
*/

let miString = document.getElementById("string");
let lista = document.getElementById("lista");
let btn = document.getElementById("btnComparar");


let array = [
    "insecto",
    "bootcamp",
    "mangos",
    "reptil",
    "mosca",
    "escritorio",
    "cosa",
    "pelo",
    "parangaricutirimicuaro"
]

function comparar() {
    let valorString = miString.value;
    nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > valorString.length) {
            nuevoArray.push(array[i]);
        }
    }
    console.log(nuevoArray);
    return nuevoArray;
}

function pintarLista() {
    console.log("pintamos la lista");
    let nuevoArray = comparar(miString, array)
    for (let index = 0; index < nuevoArray.length; index++) {

        let elementoLista = document.createElement("li")
        elementoLista.innerHTML =
            `
        ${array[index]}
        `
        lista.append(elementoLista);

    }
}


btn.addEventListener("click", pintarLista);

//mi función pintaba los elementos a la primera, no estaba usando append


/* 
instrucciones al pricipio del código
explico código
tardé en pensar nomrbes de variables
me estreso, me pongo nervioso y me equivoco en sintaxis
*/

