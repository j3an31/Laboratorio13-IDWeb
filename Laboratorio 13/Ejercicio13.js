function combinarCatalogos(tiendaA, tiendaB) {
    let combinado = {};
    for (let producto in tiendaA) {
        combinado[producto] = tiendaA[producto];
    }

    for (let producto in tiendaB) {
        if (combinado[producto]) {
        combinado[producto] = Math.min(combinado[producto], tiendaB[producto]);
        } else {
        combinado[producto] = tiendaB[producto];
        }
    }

    for (let producto in combinado) {
        combinado[producto] = parseFloat(combinado[producto].toFixed(2));
    }
    return combinado;
}

let tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
};

let tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
};

console.log("--- COMBINAR CATÁLOGO ---");
let resultado = combinarCatalogos(tiendaA, tiendaB);
console.log(resultado);