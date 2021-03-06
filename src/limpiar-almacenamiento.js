/**
 * @author brramirezr
 * @function Limpia lo que se encuentra almacenado en el localStorage
 * @param {string} [llave] llave/key para eliminar un valor especifico en el localStorage
 */
const limpiarAlmacenamiento = (llave) => {
    if (!llave) {
        localStorage.clear();
    } else {
        localStorage.removeItem(llave);
    }
}

module.exports = limpiarAlmacenamiento;