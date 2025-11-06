function distanciaEntrePuntos(x1,y1,x2,y2) {
    let distancia = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    return parseFloat(distancia.toFixed(2));
}

function sumaDistancias(funcionDistancia,x1,y1,x2,y2) {
    let distanciaAlOrigen_1 = funcionDistancia(x1,y1,0,0);
    let distanciaAlOrigen_2 = funcionDistancia(0,0,x2,y2);
    let sumaDistancias = distanciaAlOrigen_1+distanciaAlOrigen_2;
    console.log(`Suma de distancias al origen: ${sumaDistancias}`);
}

console.log("--- DISTANCIA ENTRE PUNTOS ---");
let x1 = 3;
let y1 = 4;
let x2 = 7;
let y2 = 1;
console.log(`Punto N° 1: (${x1},${y1})`);
console.log(`Punto N° 2: (${x2},${y2})`);
let distancia = distanciaEntrePuntos(x1,y1,x2,y2);
console.log(`Distancia entre los puntos: ${distancia}`);
sumaDistancias(distanciaEntrePuntos,x1,y1,x2,y2);