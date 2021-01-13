import React from 'react'
import PropTypes from 'prop-types';

//const PrimeraApp = ( {saludo = 'Valor por defecto', adios} ) => {
//Tambien podemos enviar valores por defecto usando defaultProps, ver al final
const PrimeraApp = ( {
    saludo,
    adios
    } ) => {


        /* const objeto = {
            nombre: 'Santi',
            edad: 23
        }; */

        // Se puede imprimir strings, number, arrays
        // No se puede imprimir booleanos o objetos.
        //Para imprimir un objeto hay que JSON.stringify(objeto)

    return <>
        <h3>{ saludo } </h3>
        {/* <p> { JSON.stringify( objeto, null, 3) }</p> */}
        <p> { adios } </p>
    </>
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    adios: PropTypes.string
}

PrimeraApp.defaultProps = {
    adios: 'Soy un mensaje por defecto'
}

export default PrimeraApp;