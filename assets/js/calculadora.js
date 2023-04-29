var num1;
var num2;
var operacion;

let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let boton8 = document.getElementById("boton8");
let boton9 = document.getElementById("boton9");
let botonSuma = document.getElementById("botonSuma");
let botonResta = document.getElementById("botonResta");
let botonMulti = document.getElementById("botonMulti");
let botonDiv = document.getElementById("botonDiv");
let botonPote = document.getElementById("botonPote");
let botonReset = document.getElementById("botonReset");
let botonResultado = document.getElementById("botonResult");
let resultado = document.getElementById("resultado");


let accion1 = () => {
    resultado.textContent = resultado.textContent + "1";
}
let accion2 = () => {
    resultado.textContent = resultado.textContent + "2";
}
let accion3 = () => {
    resultado.textContent = resultado.textContent + "3";
}
let accion4 = () => {
    resultado.textContent = resultado.textContent + "4";
}
let accion5 = () => {
    resultado.textContent = resultado.textContent + "5";
}
let accion6 = () => {
    resultado.textContent = resultado.textContent + "6";
}
let accion7 = () => {
    resultado.textContent = resultado.textContent + "7";
}
let accion8 = () => {
    resultado.textContent = resultado.textContent + "8";
}
let accion9 = () => {
    resultado.textContent = resultado.textContent + "9";
}

let reset = () => {
    resultado.textContent = "";
    num1 = 0;
    num2 = 0;
    operacion = "";
}

let suma = () => {
    num1 = resultado.textContent;
    operacion = "+";
    limpiar();
}
let resta = () => {
    num1 = resultado.textContent;
    operacion = "-";
    limpiar();
}
let multiplicacion = () => {
    num1 = resultado.textContent;
    operacion = "*";
    limpiar();
}
let division = () => {
    num1 = resultado.textContent;
    operacion = "/";
    limpiar();
}
let potencia = () => {
    num1 = resultado.textContent;
    operacion = "**";
    limpiar();
}

let igual = () => {
    num2 = resultado.textContent;
    resolver();
}

let limpiar = () => {
    resultado.textContent = "";
}

let resolver = () => {
    let resultadoHecho = 0;
    switch(operacion) {
        case "+":
            resultadoHecho = parseFloat(num1) + parseFloat(num2);
            break;

        case "-":
            resultadoHecho = parseFloat(num1) - parseFloat(num2);
            break;

        case "*":
            resultadoHecho = parseFloat(num1) * parseFloat(num2);
            break;

        case "/":
            resultadoHecho = parseFloat(num1) / parseFloat(num2);
            break;
        
        case "**":
            resultadoHecho = parseFloat(num1) ** parseFloat(num2);
            break;
    }
    reset();
    resultado.textContent = resultadoHecho;
}