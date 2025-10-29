function ingresarValoresArreglo(numeroDatos) {
    let arreglo = new Array();
    let x_numero;
    for(let i=0;i<numeroDatos;i++) {
        x_numero = parseFloat(prompt("Ingrese N° " +(i+1) +":"));
        arreglo.push(x_numero);
    }
    return arreglo;
}

function filtrarYTransformar(arreglo) {
    let arregloFiltrado = arreglo.filter(num => num >= 0);
    let sumaNumerosAlCuadrado = 0;
    for (let elemento of arregloFiltrado) {
        sumaNumerosAlCuadrado += elemento ** 2;
    }
    return sumaNumerosAlCuadrado;
}

console.log("--- SUMA NÚMEROS AL CUADRADO ---");
let numDatos = parseInt(prompt("¿Cuántos números ingresará?"));
console.log("Números a ingresar: " + numDatos);
let arregloNumeros = ingresarValoresArreglo(numDatos);
let sumaDeNumeros = filtrarYTransformar(arregloNumeros);

console.log("Números ingresados: " + arregloNumeros);
console.log("Suma de números al cuadrado sin considerar los negativos: " 
    + sumaDeNumeros);