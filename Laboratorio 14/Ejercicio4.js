function numeroAleatorio(min, max) {
    return parseInt(Math.random()*(max-min+1)) + min;
}

let inicio = parseInt(prompt("Ingrese límite inferior (inicio):"));
let fin = parseInt(prompt("Ingrese límite superior (final):"));
console.log("--- NÚMERO ALEATORIO ---");
console.log(`Inicio: ${inicio} \nFin: ${fin}`);
console.log("Número aleatorio: " + numeroAleatorio(inicio,fin));