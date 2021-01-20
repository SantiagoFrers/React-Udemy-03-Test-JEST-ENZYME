//Prueba sobre un componente de react

//import { render } from "@testing-library/react" // importamos esta libreria para poder renderizar componentes a evaluar
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp" // importamos el componente

describe('Pruebas en <PrimeraApp />', ()=>{

//Esta pruena es con JEST con el ajuste en el archivo setupTest, no lo usaremos mas porque pasamos a ENZYME
/*     test('debe mostrar el mensaje Hola Pedro', () => {
        const saludo = 'Hola Pedro'
        const {getByText} = render( <PrimeraApp saludo={saludo}/>)

        expect(getByText(saludo)).toBeInDocument
        //expect(getByText(saludo + '!!' )).toBeInDocument - Prueba false
    }) */

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola Pedro'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props ', () => {
        const saludo = 'Hola Pedro';
        const subtitulo = ' Soy un mensaje por defecto ';

        const wrapper = shallow(
            <PrimeraApp
                saludo = { saludo }
                subtitulo = { subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe(subtitulo)


    })

})