class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }
}

class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }

  calcularSueldo() {
    return this.sueldoBase * 1.10;
  }
}

class ProgramadorSenior extends Programador {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase, lenguaje);
  }

  calcularSueldo() {
    const sueldoConBonoBase = super.calcularSueldo();
    return this.sueldoBase * 1.25;
  }
}

const emp = new Empleado("Ana", 1000);
const prog = new Programador("Luis", 1000, "JavaScript");
const senior = new ProgramadorSenior("Marta", 1000, "Python");

console.log(`${emp.nombre}: sueldo base = ${emp.sueldoBase}`);
console.log(`${prog.nombre}: sueldo con bono = ${prog.calcularSueldo()}`);
console.log(`${senior.nombre}: sueldo con bono = ${senior.calcularSueldo()}`);