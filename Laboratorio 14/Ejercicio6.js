function mostrarPotenciasYraices(numero) {
    let numeroAlCuadrado = Math.pow(numero, 2); 
    let numeroAlCubo = Math.pow(numero, 3);
    let raizDeNumero = Math.sqrt(numero).toFixed(2);
    console.log(`- ${numero} al cuadrado: ${numeroAlCuadrado}`);
    console.log(`- ${numero} al cubo: ${numeroAlCubo}`);
    console.log(`- Raíz de ${numero}: ${raizDeNumero}`);
}

console.log("--- POTENCIAS Y RAÍCES ---");
let x_numero = parseFloat(prompt("Ingrese un número:"));
console.log(`Número ingresado: ${x_numero}`);
mostrarPotenciasYraices(x_numero);