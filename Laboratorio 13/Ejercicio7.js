function ingresarValoresArreglo(numeroDatos) {
    let arreglo = new Array();
    let x_numero;
    for(let i=0;i<numeroDatos;i++) {
        x_numero = parseFloat(prompt("Ingrese N° " +(i+1) +":"));
        arreglo.push(x_numero);
    }
    return arreglo;
}
function tieneDuplicados(arreglo) {
    let numDatos = arreglo.length;
    let arregloSinDuplicados = new Set(arreglo);
    let numDatosSinDuplicados = arregloSinDuplicados.size;
    if(numDatos == numDatosSinDuplicados) {
        return false;
    } else {
        return true;
    }
}

console.log("--- TIENE DUPLICADOS ---");
let numDatos = parseInt(prompt("¿Cuántos números ingresará?"));
console.log("Números a ingresar: " + numDatos);
let arregloNumeros = ingresarValoresArreglo(numDatos);
let duplicados = tieneDuplicados(arregloNumeros);
console.log("Números ingresados: ", arregloNumeros);
if (duplicados) {
    console.log("¡Existen elementos duplicados!");
} else {
    console.log("¡No existen elementos duplicados!");
}