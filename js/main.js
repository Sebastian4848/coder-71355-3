
//? PRODUCTOS: Definicion del stock inicial de herrajes.

var html_base = `<table border='1|1'>
<tr>
    <td>ID</td>
    <td>Herraje</td>
    <td>Stock</td>
</tr>
`



//? Clase Constructora del Objeto Herraje
class Herraje {
    constructor(nombre, stock) {
        this.id = set_id++
        this.nombre = nombre
        this.stock = stock
    }
}

let set_id = 1


//? Objeto Herrajes, Inventario inicial

let herrajes = [
    new Herraje('Argolla 2cm Dorado', 8),
    new Herraje('Argolla 2.5cm Dorado', 42),
    new Herraje('Argolla 3.2cm Dorado', 44),
    new Herraje('Cuadro 2cm Dorado', 2),
    new Herraje('Cuadro 2.5cm Dorado', 37),
    new Herraje('Media Argolla 1cm Dorado', 20),
    new Herraje('Media Argolla 1.5cm Dorado', 27),
    new Herraje('Media Argolla 2cm Dorado', 69),
    new Herraje('Media Argolla 2.5cm Dorado', 80),
    new Herraje('Mosqueton 2cm Dorado', 7),
    new Herraje('Mosqueton 2.5cm Dorado', 13),
    new Herraje('Pasador 1cm Dorado', 13),
    new Herraje('Pasador 1.5cm Dorado', 42),
    new Herraje('Pasador 2cm Dorado', 52),
    new Herraje('Pasador 2.5cm Dorado', 67),
    new Herraje('Argolla de llavero 2.5cm Dorado', 8),
    new Herraje('Mosqueton de llavero 2cm Dorado', 11),
    new Herraje('Argolla 2cm Plateado', 14),
    new Herraje('Argolla 2.5cm Plateado', 36),
    new Herraje('Argolla 3.2cm Plateado', 29),

]
let herrajes_og = herrajes

//? Definicion del sistema como metodo constructor

class Sistema {
    constructor(herrajes) {
        this.herrajes = herrajes;
    }

    //? Opcion 2: Agregar nuevo herraje al inventario, Se declara como un metodo dentro de la la clase contructora.

    nuevoHerraje() {

        let nombre = document.getElementById("herraje1").value;
        let stock = document.getElementById("stock1").value;
        this.herrajes.push(new Herraje(nombre, stock))
        // mostrarTabla(herrajes);
        actualizarTabla(herrajes)

        // const nombre = solicitarDato('cadena', 'Ingrese el nombre del herraje', 'Herraje Dorado 2.5cm');
        // const stock = solicitarDato('entero', 'Ingrese el stock actual del herraje', '10');
        // this.herrajes.push(new Herraje(nombre, stock))
        // mostrarTabla(herrajes);
        // actualizarTabla(herrajes)
    }
}




//? SISTEMA: Definicion de las funciones principales del sistema.
let sistema_stock = new Sistema(herrajes)

//? Menu principal.

// const menu_str = `
//     Presiona 1 para mostrar el stock actual de herrajes.
//     Presiona 2 para agregar un nuevo herraje al inventario.
//     Presiona 3 para buscar herrajes.
//     Presiona 4 para agregar una incidencia al stock.
//     Presiona 5 para mostrar stock bajo.
//     Presiona 6 para eliminar un herraje.
//     Presiona 7 para reasignar los IDs de los herrajes.
//     Presiona 0 para VOLVER o SALIR.
// `



//? Opcion 1: Mostrar tabla.
function mostrarTabla(datos) {
    // console.clear();
    console.table(datos);
}

//? Opcion 3: Buscar herrajes.
function filtrarHerrajes(herraje) {

    // let busqueda = solicitarDato('cadena_minusculas', 'Ingrese el nombre o alguna caracteristica del herraje', 'Argolla');
    let busqueda = document.getElementById("busqueda1").value;
    // const result = herrajes.filter((herraje) => herraje.nombre.toLowerCase().indexOf(busqueda) != -1);
    const result = herrajes.filter((herraje) => herraje.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()));
    // mostrarTabla(result);
    actualizarTabla(result)
    if (result.length == 0) {
        // alert(`La busqueda de ${busqueda} arrojo 0 resultados`);
        document.getElementById("table").innerHTML = html_base
    }
    console.log(`Se encontraron ${result.length} herrajes`);
}

//? Opcion 4: Agregar incidencia, modificar inventario.
function agregarIncidencia(herrajes) {
    let id_herraje = document.getElementById("id1").value;
    let cantidad = parseInt(document.getElementById("stock2").value, 10);
    // let id_herraje = solicitarDato('entero_positivo', 'Ingrese el ID del herraje', '1');
    // let cantidad = solicitarDato('entero', 'Ingrese la cantidad de de herrajes a sumar o restar', '5');
    herrajes[id_herraje - 1].stock = herrajes[id_herraje - 1].stock + cantidad;
    mostrarTabla(herrajes);
    actualizarTabla(herrajes)
}

//? Opcion 5: Mostrar stock bajo
function stockBajo(herrajes) {

    let busqueda = parseInt(document.getElementById("stock_bajo1").value, 10);
    console.log(busqueda)
    const result = herrajes.filter((herraje) => herraje.stock <= busqueda);
    mostrarTabla(result);
    actualizarTabla(result)
    if (result.length == 0) {
        // alert(`La busqueda de herrajes con stock menor o igual a ${busqueda} arrojo 0 resultados`);
        document.getElementById("table").innerHTML = html_base
    }
    console.log(`Se encontraron ${result.length} herrajes`);
}

//? Opcion 6: Eliminar herraje
function eliminarHerraje(herrajes) {

    let id_herraje = parseInt(document.getElementById("id2").value, 10);

    // let id_herraje = solicitarDato('entero_positivo', 'Ingrese el ID del herraje', '1');
    const herrajeID = herrajes.find((herraje) => herraje.id === id_herraje)
    const index = herrajes.indexOf(herrajeID);
    herrajes.splice([index], 1);
    mostrarTabla(herrajes);
    actualizarTabla(herrajes)
}

//? Opcion 7: Regenerar IDs
function idReset(herrajes) {
    for (let i = 0; i < herrajes.length; i++) {
        herrajes[i].id = i + 1;
    }
    mostrarTabla(herrajes);
    actualizarTabla(herrajes)
}

//? Opcion 8: Resetear inventario
function inventarioReset(herrajes) {
    // Hacer una copia profunda del inventario original y reasignarlo
    herrajes.length = 0;  // Vacía el array actual
    for (let herraje of herrajes_og) {
        herrajes.push(new Herraje(herraje.nombre, herraje.stock));  // Reagregar cada herraje del original
    }

    actualizarTabla(herrajes);
}

function actualizarTabla(array) {
    let html = html_base;
    for (let i = 0; i < array.length; i++) {

        html += '<tr>';
        html += '<td>' + array[i].id + '</td>';
        html += '<td>' + array[i].nombre + '</td>';
        html += '<td>' + array[i].stock + '</td>';
        html += '</tr>';
    }

    document.getElementById("table").innerHTML = html
}


actualizarTabla(herrajes)

let boton_agregar = document.getElementById("boton_agregar")
let boton_buscar = document.getElementById("boton_buscar")
let boton_modificar_stock = document.getElementById("boton_modificar_stock")
let boton_stock_bajo = document.getElementById("boton_stock_bajo")
let boton_id_reset = document.getElementById("boton_id_reset")
let boton_reset = document.getElementById("boton_reset")

boton_agregar.addEventListener('click', () => { sistema_stock.nuevoHerraje() })
boton_buscar.addEventListener('click', () => { filtrarHerrajes(herrajes) })
boton_modificar_stock.addEventListener('click', () => { agregarIncidencia(herrajes) })
boton_stock_bajo.addEventListener('click', () => { stockBajo(herrajes) })
boton_eliminar.addEventListener('click', () => { eliminarHerraje(herrajes) })
boton_id_reset.addEventListener('click', () => { idReset(herrajes) })
boton_reset.addEventListener('click', () => { inventarioReset(herrajes) })


























//? MAIN: Interaccion del usuario con el codigo.

// let sistema_stock = new Sistema(herrajes)


//? Funciones para hacer validacion de datos de entrada.

function solicitarDato(tipo, mensaje, sugerencia = '') {
    let dato;
    if (tipo == 'entero_positivo') {
        do {
            dato = parseFloat(prompt(mensaje, sugerencia));
        } while (isNaN(dato) || dato < 0);
    }
    else if (tipo == 'entero') {
        do {
            dato = parseInt(prompt(mensaje, sugerencia));
        } while (isNaN(dato));
    }
    else if (tipo == 'cadena') {
        do {
            dato = prompt(mensaje, sugerencia);
        } while (dato == '');
    }
    else if (tipo == 'cadena_minusculas') {
        do {
            dato = prompt(mensaje, sugerencia).toLocaleLowerCase();
        } while (dato == '');
    }

    return dato;
}

//? Bucle principal del programa

// let salir = false
// while (!salir) {

//     let opcion = parseInt(prompt(menu_str));
//     switch (opcion) {
//         case 0:
//             alert("FIN. Para volver al menu principal presiona F5")
//             salir = true
//             break
//         case 1:
//             mostrarTabla(herrajes);
//             break
//         case 2:
//             sistema_stock.nuevoHerraje();
//             break
//         case 3:
//             filtrarHerrajes(herrajes);
//             break
//         case 4:
//             agregarIncidencia(herrajes);
//             break
//         case 5:
//             stockBajo(herrajes);
//             break
//         case 6:
//             eliminarHerraje(herrajes);
//             break
//         case 7:
//             idReset(herrajes);
//             break
//         default:
//             alert("Opcion inexistente. Intente de nuevo");
//     }
// }