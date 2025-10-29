function ingresarValoresArreglo(numeroDatos) {
    let arreglo = new Array();
    let x_numero;
    for(let i=0;i<numeroDatos;i++) {
        x_numero = parseFloat(prompt("Ingrese N° " +(i+1) +":"));
        arreglo.push(x_numero);
    }
    return arreglo;
}

function dobleDeNumeros(arreglo) {
    let numerosDobles = new Array();
    for(let i=0;i<arreglo.length;i++) {
        numerosDobles.push(arreglo[i] * 2);
    }
    return numerosDobles;
}

console.log("--- DUPLICAR VALORES ---");
let numDatos = parseInt(prompt("¿Cuántos números ingresará?"));
console.log("Números a ingresar: " + numDatos);
let arregloNumeros = ingresarValoresArreglo(numDatos);
let arregloNumerosDoble = dobleDeNumeros(arregloNumeros);
console.log("Números ingresados: " + arregloNumeros);
console.log("Números ingresados duplicados: " + arregloNumerosDoble);