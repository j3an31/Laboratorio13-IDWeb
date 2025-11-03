function lanzamiento2Dados(lanzamientos) {
    for(let i=0;i<lanzamientos;i++) {
        let num1 = parseInt(Math.random()*6) + 1;
        let num2 = parseInt(Math.random()*6) + 1;
        let suma = num1 + num2;
        console.log(`>>> LANZAMIENTO ${i+1}\n- Dado 1: ${num1}\n- Dado 2: ${num2}\nSuma obtenida: ${suma}`);
    }
}

console.log("--- LANZAMIENTO DE DADOS ---");
let x_lanzamientos = parseInt(prompt("Ingrese número de lanzamientos: "));
console.log(`Número de lanzamientos: ${x_lanzamientos}`);
lanzamiento2Dados(x_lanzamientos);