let auto = {
    marca: "KIA",
    modelo: "CX-5",
    año: 2024,
    detalles() {
        console.log(`Auto: ${this.marca} ${this.modelo} (${this.año})`);
    }
};

console.log("--- AUTOMÓVIL ---");
auto.detalles();