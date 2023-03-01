import _ from 'underscore'

// export const miNombre = 'Diego';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<String>} tiposDecarta Ejemplo: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} Retorna un nuevo deck de cartas
*/

export const crearDeck = (tiposDecarta, tiposEspeciales) => {

    if(!tiposDecarta || tiposDecarta.length === 0) throw new Error('Tipos de cartas es obligatorio como un arreglo de string')
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos especiales es obligatorio como un arreglo de string')
    
    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;