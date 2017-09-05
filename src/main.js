import PlayingCard from './models/PlayingCard';
import { CARD_SUITS, DESK_LENGTH, GROUP_LENGTH } from './constants';

const desk = new Array(DESK_LENGTH)
  .fill()
  .map((elem, i) => {
    const value = i % GROUP_LENGTH;
    const suit = CARD_SUITS[parseInt(i / GROUP_LENGTH)];
    return new PlayingCard(value, suit);
  })
  .sort(() => randomInt(-1, 2))

window.onload = () => {
  const takedCardsContainer = document.querySelector('.taked-cards');

  document.querySelector('button').onclick = () => {
    if (!desk.length) {
      alert('Карты кончились!');
      return;
    }

    const [takedCard] = desk.splice(randomInt(0, desk.length), 1);
    const card = document.createElement('li');
    card.classList.add(
      'playing-card',
      '-value-' + takedCard.value,
      '-suit-' + takedCard.suitNumber
    );
    card.innerHTML = takedCard.cost + ' of ' + takedCard.suit;
    takedCardsContainer.appendChild(card);
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
