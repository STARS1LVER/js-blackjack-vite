import { pedirCartaNuevo, valorCartaNueva } from "./";
import { crearCartaHtml } from "./crear-carta-html";

/**
 * Funcion turno de la computadora
 * @param {Number} puntosMinimos Ejemplo: 10 o 20 etc 
 * @param {HTMLElement} puntosHTML el elemento html donde se muestran los puntos
 * @param {HTMLHtmlElement} divCartasComputadora el contenedor de las cartas de la computadora
 * @param {Array<String>} deck el array que contiene todas las cartas
 * @returns {undefined} No retorna nada
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML ,divCartasComputadora,deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos Minimos son necesarios')
    if(!puntosHTML) throw new Error('Puntos HTML son necesarios')
    
    let puntosComputadora = 0

    do {
        const carta = pedirCartaNuevo(deck);

        puntosComputadora = puntosComputadora + valorCartaNueva( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}