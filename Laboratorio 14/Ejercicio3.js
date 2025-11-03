let numDecimal = parseFloat(prompt("Ingrese el precio en decimales:"));

console.log("--- REDONDEO DE PRECIOS ---");
console.log(`Precio ingresado: ${numDecimal}`);
console.log("- Redondeo hacia abajo: " + Math.floor(numDecimal));
console.log("- Redondeo hacia arriba: " + Math.ceil(numDecimal));
console.log("- Redondeo normal: " + Math.round(numDecimal));