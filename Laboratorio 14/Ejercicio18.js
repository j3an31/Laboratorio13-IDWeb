class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = []; 
  }

  agregarProducto(producto) {
    if (producto instanceof Producto) {
      this.productos.push(producto);
      console.log(`Producto agregado: ${producto.nombre} - $${producto.precio}`);
    } else {
      console.log("Solo se pueden agregar objetos de tipo Producto");
    }
  }

  calcularTotal() {
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }

  mostrarResumen() {
    console.log("Resumen del carrito:");
    if (this.productos.length === 0) {
      console.log("El carrito está vacío");
      return;
    }

    this.productos.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nombre} - $${p.precio}`);
    });

    console.log(`Total a pagar: $${this.calcularTotal()}`);
  }
}

const carrito = new Carrito();
const prod1 = new Producto("Laptop", 1500);
const prod2 = new Producto("Mouse", 50);
const prod3 = new Producto("Teclado", 100);
carrito.agregarProducto(prod1);
carrito.agregarProducto(prod2);
carrito.agregarProducto(prod3);
carrito.mostrarResumen();