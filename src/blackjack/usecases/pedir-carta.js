/**
 * Esta funcion retorna una carta
 * @param {array<String>} deck Ejemplo: ['2H','3J','4K','5D']
 * @returns {string} Retorna la ultima carta eliminada Ejemplo: {'5D'}
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) throw "No hay cartas en el deck";
  const carta = deck.pop();
  return carta;
};
