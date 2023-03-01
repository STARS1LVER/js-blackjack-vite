/**
 * Esta funcion le da un valor a la carta pasada por parametro
 * @param {String} carta Ejemplo: '10D' 
 * @returns {Number} Este retorna el valor de la carta,
 * Ejemplo: si la carta vale => A su valor sera de 11
 * de lo contrario cualquier otra letra tendra valor de 10
 * y si es numero retorna el valor de ese numero.
*/

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}