class Notificacion {
  enviar() {
    console.log("Enviando una notificación genérica...");
  }
}

class Email extends Notificacion {
  enviar() {
    console.log("Enviando notificación por Email...");
  }
}

class SMS extends Notificacion {
  enviar() {
    console.log("Enviando notificación por SMS...");
  }
}

class Push extends Notificacion {
  enviar() {
    console.log("Enviando notificación Push...");
  }
}

function procesarNotificaciones(lista) {
  for (let notificacion of lista) {
    notificacion.enviar(); 
  }
}

const notificaciones = [
  new Email(),
  new SMS(),
  new Push(),
  new Email(),
];

procesarNotificaciones(notificaciones);