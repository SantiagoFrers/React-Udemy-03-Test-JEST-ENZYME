import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes',()=>{
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id)
        const heroesData = heroes.find( h => h.id === id)
            expect(heroe).toEqual(heroesData);
    });

    test('debe retornar un undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id)
            expect(heroe).toEqual(undefined);
    });

    test('debe retornar un arreglo con los heroes de DC', () => {
        const ownerTest = 'DC';
        const heroe = getHeroesByOwner(ownerTest);
        const heroesDC = heroes.filter( h => h.owner === ownerTest)
            expect(heroe).toEqual(heroesDC);
    });

    test('debe retornar un arreglo con los heroes de Marvel, con length =2', () => {
        const ownerTest = 'Marvel';
        const heroe = getHeroesByOwner(ownerTest);
        expect(heroe.length).toEqual(2)
    });

})