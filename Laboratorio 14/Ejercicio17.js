class Cuenta {
  #saldo; 

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
      console.log(`Depósito exitoso: +${monto}. Saldo actual: ${this.#saldo}`);
    } else {
      console.log("¡El monto a depositar debe ser positivo!");
    }
  }

  retirar(monto) {
    if (monto > 0 && monto <= this.#saldo) {
      this.#saldo -= monto;
      console.log(`Retiro exitoso: -${monto}. Saldo actual: ${this.#saldo}`);
    } else {
      console.log("¡Fondos insuficientes o monto inválido!");
    }
  }

  transferir(monto, cuentaDestino) {
    if (monto > 0) {
      const saldoAntes = this.getSaldo();
      this.retirar(monto); 
      if (this.getSaldo() < saldoAntes) {
        cuentaDestino.depositar(monto);
        console.log(`Transferencia de ${monto} realizada con éxito.`);
      } else {
        console.log("¡Transferencia no realizada por fondos insuficientes!");
      }
    } else {
      console.log("¡El monto a transferir debe ser positivo!");
    }
  }
}

class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto <= 0) {
      console.log("¡El monto debe ser positivo!");
    } else if (monto > this.getSaldo()) {
      console.log("Fondos insuficientes. No puedes retirar más del saldo disponible");
    } else {
      super.retirar(monto);
    }
  }
}

class CuentaCorriente extends Cuenta {
  constructor(saldoInicial = 0, limiteSobregiro = 500) {
    super(saldoInicial);
    this.limiteSobregiro = limiteSobregiro;
  }

  retirar(monto) {
    if (monto <= 0) {
      console.log("¡El monto debe ser positivo!");
      return;
    }

    const saldoDisponible = this.getSaldo() + this.limiteSobregiro;
    if (monto > saldoDisponible) {
      console.log("Operación denegada: supera el límite de sobregiro");
    } else {
      const nuevoSaldo = this.getSaldo() - monto;
      super.retirar(Math.min(monto, this.getSaldo())); 
      if (monto > this.getSaldo()) {
        console.log(`Se usó sobregiro por ${Math.abs(nuevoSaldo)}.`);
      }
    }
  }
}

const ahorro = new CuentaAhorro(1000);
const corriente = new CuentaCorriente(500, 300);
ahorro.retirar(1200); 
corriente.retirar(700); 
ahorro.transferir(200, corriente); 
console.log(`Saldo ahorro: ${ahorro.getSaldo()}`);
console.log(`Saldo corriente: ${corriente.getSaldo()}`);