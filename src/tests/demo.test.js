// Rerminal npm run test y ejectuta todos los archivos .test

//Ponemos un describe para que agrupe todas las pruebas dentro con un titulo determinado
describe('Pruebas en el archivo demo.test.js', () => {

// Tipeamos test y seleccionamos lo que ofrece VSC para auto completar
test('Deben ser iguales los strings', () => {
// 1.Inicializacion
    const mensaje = 'Hola mundo'

// 2. Estimulo
    const mensaje2 = 'Hola mundo'

// 3. Observar el comportamiento
    expect( mensaje ).toBe(mensaje2);

})
});