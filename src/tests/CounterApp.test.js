/* Tarea
1. Debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot) y sus valores por defecto
2. Debe de mostrar el valor por defecto de 100
    Usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador */

import { shallow } from 'enzyme';
import CounterApp from "../CounterApp" // importamos el componente

describe('Pruebas en <CounterApp />', ()=>{
    let wrapper = shallow(<CounterApp/>)
    // Dejamos este const aca para poder usarlo en todas las pruebas. Lo ponemos como let ya que el beforeEach cambiara su valor.
    //Lo definimos porque sino perdemos los atajos de VSC para el find, etc

    beforeEach(() =>{
        wrapper = shallow(<CounterApp/>)
    })
    // El beforeEach corre antes de cada prueba. En este caso reinicializamos el componente a su valor por defecto

    test('debe mostrar <CounterApp /> correctamente', () => {
        //const wrapper = shallow(<CounterApp />) no lo necesitamos porque esta definido dentro del describe
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 100 ', () => {

        const wrapper = shallow( <CounterApp value={100} /> ); //Tomo el componente y pongo valor por defecto de 100
        const counterHTML = wrapper.find('h2').text().trim(); // Capturo el valor por defecto que envie antes
        //.trim() borra los espacios en ambuos lados

        expect( counterHTML ).toBe('100') //Envio a mano un valor a comparar contra lo armado antes
    });

    test('debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(2).simulate('click');
        // .at(0) es para buscar el primer boton
        const counterHTML = wrapper.find('h2').text().trim();

        expect(counterHTML).toBe('11')

    });

    test('debe de reducir con el boton -1', () => {
        wrapper.find('button').at(0).simulate('click');
        // .at(0) es para buscar el primer boton
        const counterHTML = wrapper.find('h2').text().trim();

        expect(counterHTML).toBe('9')
    });

    test('debe volver a su valor por defecto cuando toquemos el reset', () => {
        const wrapper = shallow( <CounterApp value={105} /> );

        //Modificamos el valor sumando un click
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterHTML = wrapper.find('h2').text().trim();

        expect (counterHTML).toBe('105');

    });

});