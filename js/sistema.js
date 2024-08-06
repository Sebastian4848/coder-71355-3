//? SISTEMA: Definicion de las funciones principales del sistema.


//? Menu principal.

const menu_str = `
    Presiona 1 para mostrar el stock actual de herrajes.
    Presiona 2 para agregar un nuevo herraje al inventario.
    Presiona 3 para buscar herrajes.
    Presiona 4 para agregar una incidencia al stock.
    Presiona 5 para mostrar stock bajo.
    Presiona 6 para eliminar un herraje.
    Presiona 7 para reasignar los IDs de los herrajes.
    Presiona 0 para VOLVER o SALIR.
`

//? Definicion del sistema como metodo constructor

class Sistema {
    constructor(herrajes) {
        this.herrajes = herrajes;
    }

    //? Opcion 2: Agregar nuevo herraje al inventario, Se declara como un metodo dentro de la la clase contructora.

    nuevoHerraje() {
        const nombre = solicitarDato('cadena', 'Ingrese el nombre del herraje', 'Herraje Dorado 2.5cm');
        const stock = solicitarDato('entero', 'Ingrese el stock actual del herraje', '10');
        this.herrajes.push(new Herraje(nombre, stock))
        mostrarTabla(herrajes);
    }
}

//? Opcion 1: Mostrar tabla.
function mostrarTabla(datos) {
    console.clear();
    console.table(datos);
}

//? Opcion 3: Buscar herrajes.
function filtrarHerrajes(herraje) {
    let busqueda = solicitarDato('cadena_minusculas', 'Ingrese el nombre o alguna caracteristica del herraje', 'Argolla');
    // const result = herrajes.filter((herraje) => herraje.nombre.toLowerCase().indexOf(busqueda) != -1);
    const result = herrajes.filter((herraje) => herraje.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()));
    mostrarTabla(result);
    if (result.length == 0) {
        alert(`La busqueda de ${busqueda} arrojo 0 resultados`);
    }
    console.log(`Se encontraron ${result.length} herrajes`);
}

//? Opcion 4: Agregar incidencia, modificar inventario.
function agregarIncidencia(herrajes) {
    let id_herraje = solicitarDato('entero_positivo', 'Ingrese el ID del herraje', '1');
    let cantidad = solicitarDato('entero', 'Ingrese la cantidad de de herrajes a sumar o restar', '5');
    herrajes[id_herraje - 1].stock = herrajes[id_herraje - 1].stock + cantidad;
    mostrarTabla(herrajes);
}

//? Opcion 5: Mostrar stock bajo
function stockBajo(herrajes) {
    let busqueda = solicitarDato('entero_positivo', 'Ingrese valor del nivel de stock que desea revisar', '15');
    const result = herrajes.filter((herraje) => herraje.stock <= busqueda);
    mostrarTabla(result);
    if (result.length == 0) {
        alert(`La busqueda de herrajes con stock menor o igual a ${busqueda} arrojo 0 resultados`);
    }
    console.log(`Se encontraron ${result.length} herrajes`);
}

//? Opcion 6: Eliminar herraje
function eliminarHerraje(herrajes) {
    let id_herraje = solicitarDato('entero_positivo', 'Ingrese el ID del herraje', '1');
    const herrajeID = herrajes.find((herraje) => herraje.id === id_herraje)
    const index = herrajes.indexOf(herrajeID);
    herrajes.splice([index], 1);
    mostrarTabla(herrajes);
}

//? Opcion 7: Regenerar IDs
function idReset(herrajes) {
    for (let i = 0; i < herrajes.length; i++) {
        herrajes[i].id = i + 1;
    }
    mostrarTabla(herrajes);
}
