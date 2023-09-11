const computador = {
    nombre:"dell",
    precio:450,
    disponible: false
} 

//Agregar nuevas propiedades al objeto 
computador.imagen = "imagen.jpg";

// Eliminar propiedades del objeto 
delete computador.disponible;

console.log(computador);
