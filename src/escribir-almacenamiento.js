import { cifrarTexto } from '@red-unica/libreria-cifrado';
/**
 * @author brramirezr
 * @function Cifra y escribe/almacena la información en el localStorage
 * @param {string} llave item/key para escribir en el localStorage
 * @param {string} valor texto/valor para escribir en el localStorage
 */
const escribirAlmacenamiento = (llave, valor) => {

    try {
        const valorCifrado = cifrarTexto(valor);
        if (valorCifrado) {
            localStorage.setItem(llave, valorCifrado);
        }
    } catch (error) {
        console.error(error);
    }

}

export default escribirAlmacenamiento;