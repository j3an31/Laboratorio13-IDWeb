function ingresarValores(numeroDatos) {
    let arreglo = new Set();
    let x_nombre;
    for(let i=0;i<numeroDatos;i++) {
        x_nombre = prompt("Ingrese Nombre " +(i+1) +":");
        arreglo.add(x_nombre);
        console.log("Nombre " +(i+1) + ": " + x_nombre);
    }
    return arreglo;
}

console.log("--- NOMBRES NO REPETIDOS ---");
let numDatos = parseInt(prompt("¿Cuántos nombres ingresará?"));
console.log("Nombres a ingresar: " + numDatos);
let arregloNombres = ingresarValores(numDatos);
console.log("Nombres ingresados: ", Array.from(arregloNombres));