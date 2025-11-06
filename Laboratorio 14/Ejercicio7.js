function gradosARadianes(grados) {
    let conversion = (grados*Math.PI)/180;
    let seno = (Math.sin(conversion)).toFixed(2);
    let coseno = (Math.cos(conversion)).toFixed(2);
    console.log(`Seno: ${seno} \nCoseno: ${coseno}`);
}

function radianesAGrados(radianes) {
    let conversion = (radianes*180)/Math.PI;
    console.log(`Conversión a radianes: ${conversion}`);
}

console.log("--- CONVERSIÓN ---");
let x_grados = parseInt(prompt("Ingrese un ángulo en sexagesimales:"));
console.log(`Ángulo ingresado: ${x_grados}`);
gradosARadianes(x_grados);