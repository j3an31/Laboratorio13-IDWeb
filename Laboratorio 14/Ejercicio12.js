class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombreX, precioX, stockX) {
        this.#nombre = nombreX;
        this.precio = precioX; 
        this.stock = stockX;   
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }

    get stock() {
        return this.#stock;
    }

    set precio(valor) {
        let precioNumerico = Number(valor);
        if (!isNaN(precioNumerico) && precioNumerico > 0) {
            this.#precio = precioNumerico;
        } else {
            console.log("¡Precio no válido!");
        }
    }

    set stock(cantidad) {
        if (cantidad >= 0) {
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
        return `Nombre: ${this.#nombre}\nPrecio: ${this.precio}\nStock: ${this.#stock} unidades`;
    }
}

console.log("--- PRODUCTO ---");
let producto1 = new Producto("Leche", "120.5", 10);
console.log(producto1.toString());
producto1.precio = 99.9;
console.log("Nuevo precio:", producto1.precio);
producto1.precio = "45.75";
console.log("Nuevo precio:", producto1.precio);
console.log("Precio: -5");
producto1.precio = "-5"; 
producto1.vender(3);
console.log("Stock restante:", producto1.stock);
console.log("--- ESTADO FINAL ---");
console.log(producto1.toString());