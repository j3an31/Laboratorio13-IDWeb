function generarContraseña() {
    let contraseña = "";
    for(let i=1;i<=6;i++) {
        let num = parseInt(Math.random()*9 + 1);
        contraseña+=num;
    }
    console.log(`Contraseña generada: ${contraseña}`);
}

console.log("--- NUEVA CONTRASEÑA ---");
let respuesta = prompt("¿Desea genera una contraseña? (SI) (NO)");
console.log(`Generar contraseña: ${respuesta}`);
respuesta==="SI" ? generarContraseña() : "¡No se generó una contraseña!";