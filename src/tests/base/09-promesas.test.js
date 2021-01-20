import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba con promesas', (done)=>{
    /* Agregamos done como parametro para que sepa cuando termina, sirve para promesas. Sino corre el codigo y siempre da OK */
    test('getHeroeByIdAsync debe retornar un heroe asincrono', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
        .then((heroe) => {
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });

    test('debe de obtener un error si el heroe por id no existe ', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
        .catch( (error) => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
    },15000) //Agrego tiempo para que la prueba se resuelva

})