import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('Debe de retornar un objeto', () =>{
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( user ).toEqual( userTest )
        //No puedo usar toBe para comparar objetos, debe usar toEqual
    })

    test('Debe de retornar un objeto', () =>{
        const userTest2 = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        }
        const usuarioPrueba = 'El_Papi1502'

        const user2 = getUsuarioActivo(usuarioPrueba)

        expect( user2 ).toEqual( userTest2 )
        //No puedo usar toBe para comparar objetos, debe usar toEqual
    })

})