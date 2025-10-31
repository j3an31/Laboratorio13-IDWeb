let productosDisponibles = new Map([
    ["aceite", 5],["lejía", 3],["cuaderno", 6],
    ["polo", 20],["zapatos", 60]]);

function mostrarProductos(map) {
    console.log("EN STOCK:");
    for (let [clave, valor] of map) {
        console.log(`${clave} = ${valor} soles`);
  }
}

console.log("--- TIENDA ONLINE ---");
mostrarProductos(productosDisponibles);
console.log("CARRITO:");
let numProductos = parseInt(prompt("¿Cuántos productos comprará?"));
console.log("Productos a comprar: " + numProductos);
let precioTotal = 0;
for (let i=0;i<numProductos;i++) {
    let nombreProducto = prompt(`Ingrese el nombre del producto ${i + 1}:`).toLowerCase();
    let precioProducto = productosDisponibles.get(nombreProducto);
    console.log(`Producto ${i + 1}: ${nombreProducto}`);
    precioTotal += precioProducto;
  
}

console.log("Total a pagar: " + precioTotal + " soles");