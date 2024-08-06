//? MAIN: Interaccion del usuario con el codigo.

let sistema_stock = new Sistema(herrajes)


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

let salir = false
while (!salir) {

    let opcion = parseInt(prompt(menu_str));
    switch (opcion) {
        case 0:
            alert("FIN. Para volver al menu principal presiona F5")
            salir = true
            break
        case 1:
            mostrarTabla(herrajes);
            break
        case 2:
            sistema_stock.nuevoHerraje();
            break
        case 3:
            filtrarHerrajes(herrajes);
            break
        case 4:
            agregarIncidencia(herrajes);
            break
        case 5:
            stockBajo(herrajes);
            break
        case 6:
            eliminarHerraje(herrajes);
            break
        case 7:
            idReset(herrajes);
            break
        default:
            alert("Opcion inexistente. Intente de nuevo");
    }
}