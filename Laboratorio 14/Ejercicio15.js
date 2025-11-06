class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  mostrarInfo() {
    return `Usuario: ${this.nombre}, Email: ${this.email}`;
  }
}

class Cliente extends Usuario {
  constructor(nombre, email, saldo) {
    super(nombre, email);
    this.saldo = saldo;
  }

  mostrarInfo() {
    return `Cliente: ${this.nombre}, Email: ${this.email}, Saldo: $${this.saldo}`;
  }
}

class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }

  mostrarInfo() {
    return `Administrador: ${this.nombre}, Email: ${this.email}, Permisos: ${this.permisos}`;
  }
}

const usuarios = [
  new Cliente('Ana Pérez', 'ana@gmail.com', 5000),
  new Administrador('Carlos Gómez', 'carlos@gmail.com', 'Total'),
  new Cliente('Luis Martínez', 'luis@gmail.com', 1200)
];

for (const usuario of usuarios) {
  console.log(usuario.mostrarInfo());
}