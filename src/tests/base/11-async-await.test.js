import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch',()=>{

test('debe traer el url de la imagen como string', async () => {
    const url = await getImagen();
    expect(typeof url).toBe('string')
})

test('debe traer el url de la imagen, con https', async () => {
    const url = await getImagen();
    expect(url.includes('https://')).toBe(true)
})

})