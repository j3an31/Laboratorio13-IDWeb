let calificaciones = [15, 17, 12, 11, 20];
let maximo = Math.max(...calificaciones);
let calificacionesNormalizadas = calificaciones.map(nota => nota / maximo);

console.log("--- NORMALIZAR CALIFICACIONES ---");
console.log("Calificaciones originales:", calificaciones);
console.log("Calificaciones normalizadas:", calificacionesNormalizadas);