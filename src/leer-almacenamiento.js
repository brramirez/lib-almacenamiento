//import { descifrarTexto } from '@red-unica/libreria-cifrado';
const { descifrarTexto } = require('@red-unica/libreria-cifrado');
/**
 * @author brramirezr
 * @function Descifra y lee la información almacenada en el localStorage
 * @param {string} llave item/key almacenado en el localStorage
 * @returns text/valor decifrado que se encuentra almacenada en el localStorage
 */
const leerAlmacenamiento = (llave) => {
    try {
        const valorCifrado = localStorage.getItem(llave);
        const valorDescifrado = descifrarTexto(valorCifrado);
        if (valorDescifrado) {
            return valorDescifrado;
        }
    } catch (error) {
        console.error(error);
    }

}

//export default leerAlmacenamiento;
module.exports = leerAlmacenamiento;