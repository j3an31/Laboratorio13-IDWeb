function contarPalabras(texto) {
    texto = texto.toLowerCase();
    let palabras = texto.split(" ");
    let contador = new Map();
    for (let palabra of palabras) {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra) + 1);
        } else {
            contador.set(palabra, 1);
        }
    }

    console.log("Palabras encontradas:");
    for (let [palabra, cantidad] of contador) {
        console.log(`"${palabra}" aparece ${cantidad} vez/veces`);
    }
    return contador;
    }

console.log("--- Ejemplo 1 ---");
console.log("Palabras ingresadas: sol luna sol sol estrella luna");
let resultado1 = contarPalabras("sol luna sol sol estrella luna");
console.log(resultado1);
console.log("\n--- Ejemplo 2 ---");
console.log("Palabras ingresadas: casa perro gato casa casa perro sol");
let resultado2 = contarPalabras("casa perro gato casa casa perro sol");
console.log(resultado2);