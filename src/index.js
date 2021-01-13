import React from 'react'; // Solo es necesario importar React en versiones anteriores a la 17
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

const divRoot = document.querySelector('#app')

//PrimeraApp
//ReactDOM.render( <PrimeraApp saludo='Hola Pedro' /> , divRoot)
//Para enviar numeros debe ser entre llaves Ej. adios={132}

//CounterApp
ReactDOM.render( <CounterApp value={ 10 } /> , divRoot)

console.log(divRoot);
