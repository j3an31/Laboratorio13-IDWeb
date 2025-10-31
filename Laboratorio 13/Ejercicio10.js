let mapNormal = new Map([["Perú","Lima"],["Chile","Santiago"],
    ["Bolivia","La Paz"],["Colombia","Bogotá"]]);

function invertirMap(map) {
    let mapInvertido = new Map();
    for (let [clave, valor] of map) {
        mapInvertido.set(valor,clave);
    }
    return mapInvertido;
}

console.log("--- INVERTIR MAP ---");
console.log("Map normal:", mapNormal);
let mapInvertido = invertirMap(mapNormal);
console.log("Map invertido:", mapInvertido);