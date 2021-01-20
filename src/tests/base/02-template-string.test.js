import {getSaludo} from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () =>{

    test('getSaludo debe retornar hola + nombre ', () => {
        const nombre = 'Santi'
        const saludo = getSaludo( nombre );
        expect ( saludo ).toBe('Hola ' + nombre)

})

// getSaludo deberia retornar "Hola Pepe" en caso de que el nombre este vacio

test('getSaludo debe retornar Hola Pepe si no hay argumentos en el nombre ', () => {
    const saludo = getSaludo( );
    expect ( saludo ).toBe('Hola Pepe')

})

})