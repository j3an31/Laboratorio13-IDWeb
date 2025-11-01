function gestionarEmpleados(empleados) {
    let mapa = new Map();
    for (let emp of empleados) {
        if (!mapa.has(emp.area)) {
        mapa.set(emp.area, { empleados: [], salarios: [] });
        }
        let areaData = mapa.get(emp.area);
        areaData.empleados.push(emp.nombre);
        areaData.salarios.push(emp.salario);
    }
    let resultado = {};
    for (let [area, data] of mapa.entries()) {
        let suma = data.salarios.reduce((a, b) => a + b, 0);
        let promedio = suma / data.salarios.length;
        resultado[area] = {
        empleados: data.empleados,
        promedio: parseFloat(promedio.toFixed(2))
        };
    }

    console.log("--- GESTIÓN DE EMPLEADOS ---");
    for (let area in resultado) {
        console.log(`${area}:`);
        console.log("  Empleados:", resultado[area].empleados.join(", "));
        console.log("  Promedio salario:", resultado[area].promedio);
    }
    return resultado;
}

const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

let resultadoFinal = gestionarEmpleados(listaEmpleados);