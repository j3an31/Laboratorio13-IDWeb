function contarLetras(texto) {
    texto = texto.toLowerCase();
    let conteo = {};
    for (let letra of texto) {
        if (letra >= "a" && letra <= "z" || letra === "ñ") {
        if (conteo[letra]) {
            conteo[letra]++;
        } else {
            conteo[letra] = 1;
        }
        }
    }

    return conteo;
}
console.log("--- CONTADOR DE LETRAS ---");
console.log("Ejemplo 1: banana");
console.log(contarLetras("banana"));       
console.log("Ejemplo 2: Sol solecito");
console.log(contarLetras("Sol solecito"));  