//? PRODUCTOS: Definicion del stock inicial de herrajes.

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
    new Herraje('Argolla 3.8cm Plateado', 21),

]

