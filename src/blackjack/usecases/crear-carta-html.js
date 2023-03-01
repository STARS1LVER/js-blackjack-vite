/**
 * Funcion de crear la imagen html
 * @param {String} carta Ejemplo: '2D'
 * @returns {HTMLImageElement} Retorna una imagen HTML
 * esta funcion crea una imagen en base a la carta que le pasemos
*/



export const crearCartaHtml = (carta) => {

    if(!carta) throw new Error('La carta es obligatoria')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta

}