/**
 * @author brramirezr
 * @function Limpia todo lo que se encuentra almacenado en el localStorage
 */
const limpiarAlmacenamiento = () => {
    try {
        localStorage.clear();
    } catch (error) {
        console.error(error);
    }
}

export default limpiarAlmacenamiento;