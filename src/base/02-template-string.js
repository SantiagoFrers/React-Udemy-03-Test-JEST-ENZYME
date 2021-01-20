


const nombre   = 'Santi';
const apellido = 'Frers';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );

// Exportamos la funcion para hacer las pruebas
export function getSaludo( nombre = 'Pepe' ) {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );