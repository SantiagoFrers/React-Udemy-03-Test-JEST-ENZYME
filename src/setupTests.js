//import '@testing-library/jest-dom/extend-expect'; Este comando permite hacer la prueba de PrimeraApp, no lo usamos mas porque no usaremos JEST sino Enzyme

//Comandos para usar Enzyme
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

//Comando para usar npm install enzyme-to-json
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));