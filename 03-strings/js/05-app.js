const televisores = ' Monitores 20 pulgadas ';

//.replace para reemplazar
console.log(televisores);
console.log(televisores.replace('pulgadas','"'));
console.log(televisores.replace('Monitores', 'Monitor Curvo'));

// .slice para cortar 
console.log(televisores.slice(0,10) );
console.log(televisores.slice(8));

// Alternativa a slice
console.log(televisores.substring(0,10));