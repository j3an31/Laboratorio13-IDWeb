class Figura {
  constructor(nombre) {
    this.nombre = nombre;
  }

  area() {
  }

  perimetro() {
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super("Cuadrado"); 
    this.lado = lado;
  }

  area() {
    return this.lado * this.lado;
  }

  perimetro() {
    return 4 * this.lado;
  }
}

class Triangulo extends Figura {
  constructor(base, altura, lado1, lado2, lado3) {
    super("Triángulo");
    this.base = base;
    this.altura = altura;
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }

  area() {
    return (this.base * this.altura) / 2;
  }

  perimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

const cuadrado = new Cuadrado(5);
console.log(`Figura: ${cuadrado.nombre}`);
console.log("Lado: 5");
console.log(`Área: ${cuadrado.area()}`);
console.log(`Perímetro: ${cuadrado.perimetro()}`);

const triangulo = new Triangulo(6, 4, 3, 4, 5);
console.log(`Figura: ${triangulo.nombre}`);
console.log("Base: 6; Altura: 4; Lados: 3,4,5");
console.log(`Área: ${triangulo.area()}`);
console.log(`Perímetro: ${triangulo.perimetro()}`);