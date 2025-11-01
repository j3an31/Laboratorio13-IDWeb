function reordenarPalabras(oracion) {
    let palabras = oracion.toUpperCase().split(" ");
    palabras.sort();
    return palabras;
}

console.log("--- REORDENAR PALABRAS ---");
console.log("Palabras escogidas: sol luna estrella planeta");
console.log("Palabras reordenadas: ", reordenarPalabras("sol luna estrella planeta"));