const CARD_SUITS = ['clubs', 'hearts', 'spades', 'diamonds'];
const DESK_LENGTH = 36;
const GROUP_LENGTH = DESK_LENGTH / 4;

class PlayingCard {
  constructor(value, suit) {
    return Object.assign(this, { value, suit });
  }

  get cost() {
    return (
      this.value === 8 ? 'Ace' :
      this.value === 7 ? 'King' :
      this.value === 6 ? 'Queen' :
      this.value === 5 ? 'Jack' :
      this.value + 6
    );
  }
  set cost(cost) {
    this.value = (
      cost === 'Ace' ? 8 :
      cost === 'King' ? 7 :
      cost === 'Queen' ? 6 :
      cost === 'Jack' ? 5 :
      cost - 6
    );
  }

  get suitNumber() {
    return CARD_SUITS.findIndex(suit => suit === this.suit);
  }
}

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

// Масти:
//
//     Трефы — clubs
//     Червы — hearts
//     Пики — spades
//     Бубны — diamonds
//
// Достоинства:
//
//     «В» = «J» — Jack
//     «Д» = «Q» — Queen
//     «К» = «K» — King
//     «Т» = «A» — Ace
