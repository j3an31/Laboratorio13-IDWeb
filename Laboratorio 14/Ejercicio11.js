class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombreX, precioX, stockX) {
        this.#nombre = nombreX;
        this.precio = precioX; 
        this.stock = stockX;  
    }

    set precio(soles) {
        if (soles > 0) {
            this.#precio = soles;
        } else {
            console.log("¡Precio no válido!");
        }
    }

    set stock(cantidad) {
        if (cantidad > 0) {
            this.#stock = cantidad;
        } else {
            console.log("¡Cantidad no válida!");
        }
    }

    vender(x_cantidad) {
        if (this.#stock >= x_cantidad) {
            this.#stock -= x_cantidad;
            console.log(`Se vendió ${x_cantidad} unidad/es`);
        } else {
            console.log(`No hay stock suficiente para vender ${x_cantidad} unidades`);
        }
    }

    toString() {
        return `Nombre: ${this.#nombre}\nPrecio: ${this.#precio} soles\nStock: ${this.#stock} unidades`;
    }
}

console.log("--- PRODUCTO ---");
let producto1 = new Producto("Leche", 3, 10);
console.log(producto1.toString());
producto1.vender(7);
console.log(producto1.toString());
producto1.vender(5);