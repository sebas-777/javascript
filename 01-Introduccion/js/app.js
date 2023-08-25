/*
===========================================
==== LE PREGUNTA AL USUARIO SU NOMBRE =====
===========================================
*/

const nombre = prompt('cual es tu nombre?');


// Asigna el valor hacia la variable producto
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;