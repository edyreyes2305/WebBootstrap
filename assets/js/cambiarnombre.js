const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");

const nameChange =  () => {
    let valor = prompt("¿Cual es tu nombre?");
    nombre.innerHTML = `Hola ${valor}`;
    nombre.style.color = 'red';
    console.log(valor);
}